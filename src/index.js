import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './root';

const store = configureStore();

const rawDispatch = store.dispatch;
store.dispatch = action => {
  console.group('%cdispatching action: ', 'color: green', action);
  console.log('%cprevious state: ', 'color: green', store.getState());
  rawDispatch(action);
  console.log('%ccurrent state: ', 'color: green', store.getState());
  console.groupEnd();
};

//because child container components subscribe to the store themselfvs
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
