import React from 'react';
import {Component} from 'react';

//uppercase A is required that react knows it is a react component
import AddToDo from './addtodo';
import ToDos from './todos';
import FilterToDo from './filterToDo';

// class ToDoApp extends Component {
//   render() {
//       return <div>
//         <AddToDo onClick={this.props.onAdd}/>
//         <ToDos todos={this.props.todos} />
//       </div>;
//     }
// }

//stateless function
//but ToDoApp could be a container component
const ToDoApp = ({onAdd, todos, onToggle, onFilter, visibilityFilter}) => <div>
  <AddToDo onClick={onAdd}/>
  <ToDos todos={todos} onToggle={onToggle}/>
  <FilterToDo onFilter={onFilter} visibilityFilter={visibilityFilter}/>
</div>;

export default ToDoApp;
