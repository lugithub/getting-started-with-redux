import {combineReducers} from 'redux';
import todo from './todo';
import _ from 'lodash';

//prefer reducers to the persistedState to specify the default
//because that makes it easy to test the changes
const byId = (state = {}, action) => {
  const {id} = action;
  const index = _.findIndex(state, {id});

  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };

    default:
      //could return the initial state
      return state;
  }
};

//this is implementation details of converting the lookup map to array
//my approarch of lodash doesn't need it
const allIds = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

export default todos;

//selector
export const getVisibleToDos = (state, filter) => {
  const {byId} = state;

  switch (filter) {
    case 'all':
      return _.map(byId);
    case 'completed':
      return _.filter(byId, {completed: true});
    default:
      return _.filter(byId, {completed: false});
  }
};
