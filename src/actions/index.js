import {v4} from 'node-uuid';
import * as api from '../api';

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

export const fetchTodos = filter => dispatch => {
  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(response =>
    dispatch(receiveTodos(filter, response)));
};
