import {createStore} from 'redux';
import throttle from 'lodash/throttle';

//reducer has lowercase naming convertion
import todoApp from './reducers';

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group('%cdispatching action: ', 'color: blue', action);
    console.log('%cprevious state: ', 'color: gray', store.getState());

    //i had an error using store.dispatch instead of rawDispatch, which
    //calls the wrapper recursively
    const value = rawDispatch(action);
    console.log('%ccurrent state: ', 'color: green', store.getState());
    console.groupEnd();
    return value;
  };
};

const configureStore = () => {
  const store = createStore(todoApp);

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(throttle(() => {
  }, 1000));

  return store;
};

export default configureStore;
