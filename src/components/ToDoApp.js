import React from 'react';

//uppercase A is required that react knows it is a react component
import AddToDo from './addtodo';
import ToDos from './todos';

let id = 0;

const ToDoApp = ({store}) => <div>
  <AddToDo onClick={ text => {
      store.dispatch({type: 'ADD_TODO', id, text});
      id++;
    }
  }/>
  <ToDos todos={store.getState().todos} />
</div>;

export default ToDoApp;
