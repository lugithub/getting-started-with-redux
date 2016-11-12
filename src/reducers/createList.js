import {combineReducers} from 'redux';

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
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
      case 'FETCH_TODOS_REQUEST':
        return true;
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }

    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null;
      case 'FETCH_TODOS_FAILURE':
        return action.message || 'Something went wrong!';
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  })
};

export default createList;

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;

export const getErrorMessage = state => state.errorMessage;
