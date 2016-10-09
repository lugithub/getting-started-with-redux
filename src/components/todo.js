import React, { Component, PropTypes } from 'react';

const ToDo =  ({todo}) => {

  return <div>
      {todo.id} {todo.text}
  </div>;

};

export default ToDo;
