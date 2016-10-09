import React, { Component, PropTypes } from 'react';

class AddToDo extends Component {
  render() {
      return <span>
        <input ref={node => this.node = node} />
        <button onClick={() => this.props.onClick(this.node.value)}>
          add todo
        </button>
      </span>;
  }
}

// const AddToDo =  ({onClick}) => {
//
//   let _node;
//
//   return <span>
//     <input ref={node => _node = node} />
//     <button onClick={() => onClick(_node.value)}>
//       add todo
//     </button>
//   </span>
// };

export default AddToDo;
