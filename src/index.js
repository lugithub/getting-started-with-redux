import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//reducer has lowercase naming convertion
import todoApp from './reducers';

//component has uppercase naming convention
import ToDoApp from './components/ToDoApp';

const store = createStore(todoApp);

const rawDispatch = store.dispatch;
store.dispatch = action => {
  console.group('%cdispatching action: ', 'color: green', action);
  console.log('%cprevious state: ', 'color: green', store.getState());
  rawDispatch(action);
  console.log('%ccurrent state: ', 'color: green', store.getState());
  console.groupEnd();
};

//because child container components subscribe to the store themselfvs
ReactDOM.render(<ToDoApp store={store}/>,
document.getElementById('root'));
