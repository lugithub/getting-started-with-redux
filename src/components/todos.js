import React, { Component, PropTypes } from 'react';
import ToDo from './todo';

const ToDos =  ({todos}) => {

  return <ul>
      {todos.map(todo => <ToDo key={todo.id} todo={todo} />)}
  </ul>;

};

export default ToDos;
