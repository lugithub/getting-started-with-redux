import React, { Component, PropTypes } from 'react';

//DOM component/presentational component: it has no biz logic. it only specifies how current app state
//forms into renderable output, and how callbacks passed via props are bound to
//the event handlers
const counter =  ({ value, onIncrement, onDecrement }) => (
  <span>
    Clicked: {value} times
    {' '}

    //if an action was dispatched, instead of onIncrement callback,
    //it would add redux dependency
    <button onClick={onIncrement}>
      +
    </button>
    {' '}
    <button onClick={onDecrement}>
      -
    </button>
  </span>
)

//would report run-time warning
counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default counter;
