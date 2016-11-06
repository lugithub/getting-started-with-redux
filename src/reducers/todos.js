import {combineReducers} from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      //shallow cope
      const nextState = {...state};
      _.forEach(action.response, (todo, id) => nextState[id] = todo);

      //why not just action.response?
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  if (action.filter !== 'all') {
    return state;
  }
  switch(action.type) {
    case 'RECEIVE_TODOS':
      return _.map(action.response, (todo, id) => id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  if (action.filter !== 'active') {
    return state;
  }
  switch(action.type) {
    case 'RECEIVE_TODOS':
      return _.map(action.response, (todo, id) => id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  if (action.filter !== 'completed') {
    return state;
  }
  switch(action.type) {
    case 'RECEIVE_TODOS':
      return _.map(action.response, (todo, id) => id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

const todos = combineReducers({
  byId,
  idsByFilter,
});

export default todos;
