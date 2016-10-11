import React, { Component, PropTypes } from 'react';
import {connect}from 'react-redux';

//since ES6 class is hoisted but not initialzed, the app will break
//if line 8 is moved after line 38.

//presentational component
class AddToDo extends Component {
  render() {
    return <span>
      <input ref={node => this._node = node} />
      <button onClick={() => {
        this.props.onClick(this._node.value);
        this._node.value = '';
      }}>
        add todo
      </button>
    </span>;
  }
}

let id = 0;

//props are the props of the presentational component, AddToDo.
//the video is different.
//but mine is better because it is weird for AddToDo to have a dispatch prop
const mapDispathToProps = dispatch => ({
  onClick: text => dispatch({
    type: 'ADD_TODO',
    id: id++,
    text
  })
});

//container component
const VisibleAddToDo = connect(
  null,
  mapDispathToProps
)(AddToDo);

export default VisibleAddToDo;
