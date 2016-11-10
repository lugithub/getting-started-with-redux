import {combineReducers} from 'redux';

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case 'RECEIVE_TODOS':
        return _.map(action.response, (todo, id) => id);
      default:
        //this is important
        //otherwise, switch back to a previous filter will
        //always show loading.
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }


    switch (action.type) {
      case 'REQUEST_TODOS':
        return true;
      case 'RECEIVE_TODOS':
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
  })
};

export default createList;

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;
