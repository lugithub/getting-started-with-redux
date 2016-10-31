//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ToDos from './todos';
import * as actions from '../actions';
import {getVisibleToDos} from '../reducers';

class VisibleToDos extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps) {
    if (this.props.filter !== previousProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    //fetchTodos is not actions.fetchTodos.
    //it's fetchTodos on mapDispatchToProps.
    const {filter, fetchTodos} = this.props;
    fetchTodos(this.props.filter);
  }

  render() {
    const {toggleToDo, ...rest} = this.props;
    return <ToDos onToggle={toggleToDo} {...rest} />
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

  //onToggle is a prop of ToDos.
  //fetchTodos is a prop of VisibleToDos.
  //actions.fetchTodos is an async action creator.
  actions,
)(VisibleToDos));

export default VisibleToDos;
