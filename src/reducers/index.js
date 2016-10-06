//separate how individual todo is updated from how todo arrary is updated

import todo from './todo';
import _ from 'lodash';

export default (state = [], action) => {
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
