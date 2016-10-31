//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ToDos from './todos';
import {toggleToDo} from '../actions';
import {getVisibleToDos} from '../reducers';
import {fetchTodos} from '../api';

class VisibleToDos extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => console.log(this.props.filter,
    todos));
  }

  componentDidUpdate(previousProps) {
    if (this.props.filter !== previousProps.filter) {
      fetchTodos(this.props.filter).then(todos => console.log(this.props.filter,
      todos));      
    }
  }
  render() {
    return <ToDos {...this.props} />
  }
}

//props are the props of the presentational component, ToDos.

//second argument is ownProps
const mapStateToProps = (state, {params}) => {
  const {todos} = state;
  const filter = params.filter || 'all';

  //VisibleToDos is isolated if the state shape changes around todos
  const visibleToDos = getVisibleToDos(state, params.filter || 'all');
  return {
    todos: visibleToDos,
    filter,
  };
};

//withRouter is handy when i need to read router params in deep component tree
VisibleToDos = withRouter(connect(
  mapStateToProps,

  //onToggle is a prop of ToDos
  {onToggle: toggleToDo}
)(VisibleToDos));

export default VisibleToDos;
