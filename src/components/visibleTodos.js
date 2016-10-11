//required
import React from 'react';
import {Component} from 'react';
import ToDos from './todos';

class VisibleToDos extends Component {
  componentDidMount() {
    const {store} = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmont() {
    this.unsubscribe();
  }
  render() {
      const {store} = this.props;
      const {todos, visibilityFilter} = store.getState();
      const visibleToDos = getVisibleToDos(todos, visibilityFilter);

      return <ToDos todos={visibleToDos}
                    onToggle={id => {
                      store.dispatch({type: 'TOGGLE_TODO', id});
                    }}
                    />;
    }
}

const getVisibleToDos = (todos, filter) => {
  return todos.filter(todo => {
    switch (filter) {
      case 'all':
        return true;
      case 'completed':
        return todo.completed;
      default:
        return !todo.completed;
    }
  });
};

export default VisibleToDos;
