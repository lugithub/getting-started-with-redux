import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

const rawDispatch = store.dispatch;
store.dispatch = action => {
  console.group('%cdispatching action: ', 'color: green', action);
  console.log('%cprevious state: ', 'color: green', store.getState());
  rawDispatch(action);
  console.log('%ccurrent state: ', 'color: green', store.getState());
  console.groupEnd();
};

let id = 0;

//type: 'dummy' is required. otherwise, i'm getting an error 'Actions may not
//have an undefined "type" property. Have you misspelled a constant?'
store.dispatch({type: 'dummy'});

store.dispatch({type: 'ADD_TODO', id, text: 'foo'});
id++;
store.dispatch({type: 'ADD_TODO', id, text: 'bar'});

store.dispatch({type: 'TOGGLE_TODO', id});

store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'});
