import React from 'react';
import {Component} from 'react';

//uppercase A is required that react knows it is a react component
import AddToDo from './addtodo';
import ToDos from './todos';

// class ToDoApp extends Component {
//   render() {
//       return <div>
//         <AddToDo onClick={this.props.onAdd}/>
//         <ToDos todos={this.props.todos} />
//       </div>;
//     }
// }

//stateless function
const ToDoApp = ({onAdd, todos}) => <div>
  <AddToDo onClick={onAdd}/>
  <ToDos todos={todos}/>
</div>;

export default ToDoApp;
