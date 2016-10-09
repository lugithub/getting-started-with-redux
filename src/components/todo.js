import React, { Component, PropTypes } from 'react';

const ToDo =  ({todo}) => {

  return <li> {todo.id} {todo.text} </li>;

};

export default ToDo;
