import _ from 'lodash';

export default (state = [], action) => {
  const {id, text} = action;
  const index = _.findIndex(state, {id});

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id, text, completed: false}];
    case 'REMOVE':
      return [...state.slice(0, action.index), ...state.slice(action.index+1)];

    case 'TOGGLE_TODO':
      return [
        ...state.slice(0, index),
        {...state[index], completed: !state[index].completed},
        ...state.slice(index+1)
      ];

    case 'DECREMENT':
      return [...state.slice(0, action.index), --state[action.index],
      ...state.slice(action.index+1)];
    default:
      //could return the initial state
      return state;
  }
};
