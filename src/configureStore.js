import {createStore} from 'redux';
import throttle from 'lodash/throttle';

//reducer has lowercase naming convertion
import todoApp from './reducers';

//currying
const logger = store => next => {
    if (!console.group) {
      return next;
    }

    return action => {
      console.group('%cdispatching action: ', 'color: blue', action);
      console.log('%cprevious state: ', 'color: gray', store.getState());

      //i had an error using store.dispatch instead of rawDispatch, which
      //calls the wrapper recursively
      const value = next(action);
      console.log('%ccurrent state: ', 'color: green', store.getState());
      console.groupEnd();
      return value;
    };
};

const promise = store => next => action => {
      if (typeof action.then === 'function') {
        return action.then(a => next(a));
      } else {
        return next(action);
      }
    };

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    let next = store.dispatch;
    middlewares.slice().reverse()
    .forEach(middleware => next = middleware(store)(next));
    store.dispatch = next;
};

const configureStore = () => {
  const store = createStore(todoApp);
  const middlewares = [promise];

  //it's like a stack
  //log is added first and it's at the bottom.
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  store.subscribe(throttle(() => {
  }, 1000));

  return store;
};

export default configureStore;
