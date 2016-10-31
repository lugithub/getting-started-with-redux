import {v4} from 'node-uuid';

export const addToDo = text => ({
    type: 'ADD_TODO',
    id: v4(),
    text
  });

export const toggleToDo = id => ({
    type: 'TOGGLE_TODO',
    id
  });

export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});
