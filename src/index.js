import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

//reducer has lowercase naming convertion
import todoApp from './reducers';

//component has uppercase naming convention
import ToDoApp from './components/ToDoApp';

const persistedState = loadState();

const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos});
}, 1000));

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
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
document.getElementById('root'));
