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
  getChildContext() {
   return {store: this.props.store};
  }

  render() {
    return <div>
            <AddToDo/>
            <VisibleToDos/>
            <FilterToDo/>
          </div>;
  }
}

ToDoApp.childContextTypes = {
  store: React.PropTypes.object
};
export default ToDoApp;
