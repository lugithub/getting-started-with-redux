import {combineReducers} from 'redux';
import _ from 'lodash';

const createList = filter => {
  const ids = (state = [], action) => {
    // if (action.type === 'TOGGLE_TODO') {
    //   let nextState = state.slice();
    //
    //   if (action.todo.completed) {
    //     if (filter === 'active') {
    //       _.pull(nextState, action.todo.id);
    //     }
    //     if (filter === 'completed') {
    //       nextState.push(action.todo.id);
    //     }
    //   } else {
    //     if (filter === 'active') {
    //       nextState.push(action.todo.id);
    //     }
    //     if (filter === 'completed') {
    //       _.pull(nextState, action.todo.id);
    //     }
    //   }
    //   return nextState;
    // }

    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return filter === action.filter ?
          action.response.result : state;
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ?
          [...state, action.response.result] : state;
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
