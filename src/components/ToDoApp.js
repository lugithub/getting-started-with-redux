import React from 'react';
import {Component} from 'react';

//uppercase A is required that react knows it is a react component
import AddToDo from './addtodo';
import VisibleToDos from './visibleTodos';
import FilterToDo from './filterToDo';

// class ToDoApp extends Component {
//   render() {
//       return <div>
//         <AddToDo onClick={this.props.onAdd}/>
//         <ToDos todos={this.props.todos} />
//       </div>;
//     }
// }

class ToDoApp extends Component {
  render() {
    return <div>
            <AddToDo/>
            <VisibleToDos filter={this.props.params.filter || 'all'}/>
            <FilterToDo/>
          </div>;
  }
}

export default ToDoApp;
