//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ToDos from './todos';
import {toggleToDo} from '../actions';
import {getVisibleToDos} from '../reducers';

//props are the props of the presentational component, ToDos.

//second argument is ownProps
const mapStateToProps = (state, {params}) => {
  const {todos} = state;

  //VisibleToDos is isolated if the state shape changes around todos
  const visibleToDos = getVisibleToDos(state, params.filter || 'all');
  return {todos: visibleToDos}
};

//withRouter is handy when i need to read router params in deep component tree
const VisibleToDos = withRouter(connect(
  mapStateToProps,

  //onToggle is a prop of ToDos
  {onToggle: toggleToDo}
)(ToDos));

export default VisibleToDos;
