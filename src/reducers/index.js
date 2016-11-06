import {combineReducers} from 'redux';
import todos from './todos';

const todoApp = combineReducers({
  todos,
});

export default todoApp;

//selector
export const getVisibleToDos = (state, filter) => {
  const ids = state.todos.idsByFilter[filter];
  return ids.map(id => state.todos.byId[id]);
}
