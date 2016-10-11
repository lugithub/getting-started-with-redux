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
class AddToDo extends Component {
  render() {
    return <span>
      <input ref={node => this._node = node} />
      <button onClick={() => {
        this.context.store.dispatch({
          type: 'ADD_TODO',
          id: id++,
          text: this._node.value
        });
        this._node.value = '';
      }}>
        add todo
      </button>
    </span>;
  }
}

AddToDo.contextTypes = {
  store: React.PropTypes.object
};

export default AddToDo;
