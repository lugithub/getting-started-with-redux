import todo from './todo';
import _ from 'lodash';

//prefer reducers to the persistedState to specify the default
//because that makes it easy to test the changes
const todos = (state = [], action) => {
  const {id} = action;
  const index = _.findIndex(state, {id});

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];

    case 'TOGGLE_TODO':
      return [
        ...state.slice(0, index),
        todo(state[index], action),
        ...state.slice(index+1)
      ];

    default:
      //could return the initial state
      return state;
  }
};

export default todos;

//selector
export const getVisibleToDos = (state, filter) => {
  return state.filter(todo => {
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
