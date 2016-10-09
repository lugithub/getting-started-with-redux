import React, { Component, PropTypes } from 'react';
import ToDo from './todo';

const ToDos =  ({todos, onToggle}) => {

  return <ul>
      {todos.map(todo => <ToDo key={todo.id} todo={todo} onToggle={onToggle}/>)}
  </ul>;

};

export default ToDos;
