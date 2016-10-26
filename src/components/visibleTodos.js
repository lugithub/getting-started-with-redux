//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ToDos from './todos';
import {toggleToDo} from '../actions';

//props are the props of the presentational component, ToDos.

//second argument is ownProps
const mapStateToProps = (state, {params}) => {
  const {todos} = state;
  const visibleToDos = getVisibleToDos(todos, params.filter || 'all');
  return {todos: visibleToDos}
};

//withRouter is handy when i need to read router params in deep component tree
const VisibleToDos = withRouter(connect(
  mapStateToProps,

  //onToggle is a prop of ToDos
  {onToggle: toggleToDo}
)(ToDos));

const getVisibleToDos = (todos, filter) => {
  return todos.filter(todo => {
    switch (filter) {
      case 'all':
        return true;
      case 'completed':
        return todo.completed;
      default:
        return !todo.completed;
    }
  });
};

export default VisibleToDos;
