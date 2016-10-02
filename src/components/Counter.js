import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <span>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
      </span>
    )
  }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter;
