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

//stateless function
//but ToDoApp could be a container component
const ToDoApp = ({store}) => <div>
  <AddToDo store={store}/>
  <VisibleToDos store={store}/>
  <FilterToDo store={store}/>
</div>;

export default ToDoApp;
