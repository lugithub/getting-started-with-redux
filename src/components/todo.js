import React, { Component, PropTypes } from 'react';

//presentational component
const ToDo =  ({todo, onToggle}) => {

  return <li
  onClick={() => onToggle(todo.id)}
  style={{
    textDecoration: todo.completed ? 'line-through' : ''
  }}
  > {todo.id} {todo.text} </li>;

};

export default ToDo;
