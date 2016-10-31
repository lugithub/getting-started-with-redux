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

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;

  return action => {
    if (typeof action.then === 'function') {
      return action.then(a => rawDispatch(a));
    } else {
      return rawDispatch(action);
    }
  };
};

const configureStore = () => {
  const store = createStore(todoApp);

  //it's like a stack
  //log is added first and it's at the bottom.
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  //promise is added second and it's at the top.
  store.dispatch = addPromiseSupportToDispatch(store);

  store.subscribe(throttle(() => {
  }, 1000));

  return store;
};

export default configureStore;
