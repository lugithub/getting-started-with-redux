import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';

//reducer has lowercase naming convertion
import todoApp from './reducers';

//thunk is a composable way to express async action creators that want to
//emit several actions during the course of an async operation

//a thunk can dispatch an plain object action or other thunks.
//other thunks are like a function returned from fetchTodos(filter).


const thunk = store => next => action =>
  typeof action === 'function' ?

    //store.dispatch is already wrapped in the middleware chain.
    action(store.dispatch) :
    next(action);

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
