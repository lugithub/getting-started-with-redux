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

let id = 0;

//temporal dead zone: if line 25 was moved after line 34, ReferenceError
const render = () => {
  ReactDOM.render(<ToDoApp
    onAdd={text => {
      store.dispatch({type: 'ADD_TODO', id, text});
      id++;
    }}

    todos={store.getState().todos}

    onToggle={
      id => store.dispatch({type: 'TOGGLE_TODO', id})
    }
    />,
  document.getElementById('root'));
};

store.subscribe(render);
render();
