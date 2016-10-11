import React, { Component, PropTypes } from 'react';

// class AddToDo extends Component {
//   render() {
//       return <span>
//         <input ref={node => this.node = node} />
//         <button onClick={() => {
//           this.props.onClick(this.node.value);
//           this.node.value = '';
//         }}>
//           add todo
//         </button>
//       </span>;
//   }
// }

let id = 0;

//mixed component
const AddToDo =  ({store}) => {

  let _node;

  return <span>
    <input ref={node => _node = node} />
    <button onClick={() => {
      store.dispatch({type: 'ADD_TODO', id: id++, text: _node.value});
      _node.value = '';
    }}>
      add todo
    </button>
  </span>
};

export default AddToDo;
