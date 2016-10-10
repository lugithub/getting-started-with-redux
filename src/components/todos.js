import React, { Component, PropTypes } from 'react';
import ToDo from './todo';

//presentational component
const ToDos =  ({todos, onToggle}) => {

  return <ul>
      {todos.map(todo => <ToDo key={todo.id} todo={todo} onToggle={onToggle}/>)}
  </ul>;

};

export default ToDos;
