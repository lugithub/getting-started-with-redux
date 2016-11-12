import {v4} from 'node-uuid';
import * as api from '../api';
import {getIsFetching} from '../reducers';

export const addToDo = text => ({
    type: 'ADD_TODO',
    id: v4(),
    text
  });

export const toggleToDo = id => ({
    type: 'TOGGLE_TODO',
    id
  });

//no longer exported
const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

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
  if(getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(response =>
    dispatch(receiveTodos(filter, response)));
};
