import React, { Component, PropTypes } from 'react';
import ToDo from './todo';

const ToDos =  ({todos}) => {

  return <div>
      {todos.map(todo => <ToDo key={todo.id} todo={todo} />)}
  </div>;

};

export default ToDos;
