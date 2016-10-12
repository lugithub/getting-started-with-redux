//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import ToDos from './todos';
import {toggleToDo} from '../actions';

//props are the props of the presentational component, ToDos.
const mapStateToProps = state => {
  const {todos, visibilityFilter} = state;
  const visibleToDos = getVisibleToDos(todos, visibilityFilter);
  return {todos: visibleToDos}
};

//props are the props of the presentational component, ToDos.
const mapDispathToProps = dispatch => ({
  onToggle: id => dispatch(toggleToDo(id))
});

const VisibleToDos = connect(
  mapStateToProps,
  mapDispathToProps
)(ToDos);

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
