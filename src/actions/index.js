import {normalize} from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import {getIsFetching} from '../reducers';

//async action creator
//an action prmoise which resolves to a single action in the end
//but we want an abstraction that represents multiple actions dispatched
//over a period of time
//such functions returned from functions are often called thunks.

//thunk is a composable way to express async action creators that want to
//emit several actions during the course of an async operation

export const fetchTodos = filter => (dispatch, getState) => {
  //this could be a problem
  //isFetching filter: completed but isFetching returns false for filter:active
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  });

  return api.fetchTodos(filter).then(response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos),
      })
    },
    //or catch
    //downside of catch is that if a reducer handling FETCH_TODOS_SUCCESS
    //throws an error, it will be caught here as well but we only want to catch
    //API error here.
    error =>
    dispatch({
      type: 'FETCH_TODOS_FAILURE',
      filter,
      message: error.message,
    }));
};

//thunk
export const addToDo = text => dispatch => {
  return api.addTodo(text).then(response => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo),
      });
    }
  );
};

//thunk
export const toggleToDo = id => dispatch => {
  return api.toggleTodo(id).then(response => dispatch({
    type: 'TOGGLE_TODO_SUCCESS',
    response: normalize(response, schema.todo),
  }));
};
