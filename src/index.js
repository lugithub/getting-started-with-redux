import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import todoApp from './reducers';

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

store.subscribe(() => {
  ReactDOM.render(<ToDoApp store={store}/>, document.getElementById('root'));
});

//type: 'dummy' is required. otherwise, i'm getting an error 'Actions may not
//have an undefined "type" property. Have you misspelled a constant?'
store.dispatch({type: 'dummy'});
