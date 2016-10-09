import React, { Component, PropTypes } from 'react';

const addToDo =  ({onClick}) => {

  let w;
  function setInput(input) {
    w = input;
  }
  return <span>
    <input ref={setInput} />
    <button onClick={() => onClick(w.value)}>
      add todo
    </button>
  </span>
};

export default addToDo;
