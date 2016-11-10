//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ToDos from './todos';
import * as actions from '../actions';
import {getVisibleToDos, getIsFetching} from '../reducers';

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
    const {filter, requestTodos, fetchTodos} = this.props;
    requestTodos(filter);
    fetchTodos(this.props.filter);
  }

  render() {
    const {toggleToDo, todos, isFetching} = this.props;

    if (isFetching && !todos.length) {
        return <p>Loading...</p>;
    }

    return <ToDos onToggle={toggleToDo} todos={todos} />
  }
}

//props are the props of the presentational component, ToDos.

//second argument is ownProps
const mapStateToProps = (state, {params}) => {
  const {todos} = state;
  const filter = params.filter || 'all';

  //VisibleToDos is isolated if the state shape changes around todos
  const visibleToDos = getVisibleToDos(state, filter);
  const isFetching = getIsFetching(state, filter);
  return {
    todos: visibleToDos,
    isFetching,
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
