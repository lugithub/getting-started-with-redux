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

//if SET_VISIBILITY_FILTER updated state.todos, then some todos would be lost
//it would then be harder to implement.
//again the state should be the MINIMUM representation of the data.
const getVisibleToDos = (todos, filter) => {
  return store.getState().todos.filter(todo => {
    switch (store.getState().visibilityFilter) {
      case 'all':
        return true;
      case 'completed':
        return todo.completed;
      default:
        return !todo.completed;
    }
  });
};

const render = () => {
  const {todos, visibilityFilter} = store.getState();
  const visibleToDos = getVisibleToDos(todos, visibilityFilter);

  ReactDOM.render(<ToDoApp
    onAdd={text => {
      store.dispatch({type: 'ADD_TODO', id: id++, text});
    }}

    todos={visibleToDos}

    onToggle={
      id => store.dispatch({type: 'TOGGLE_TODO', id})
    }

    store={store}
    />,
  document.getElementById('root'));
};

store.subscribe(render);
render();
