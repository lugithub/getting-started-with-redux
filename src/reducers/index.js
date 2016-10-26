import {combineReducers} from 'redux';
import todos, * as fromToDos from './todos';

//todos key is the key of the corresponding field in the state
//todos value is the reducer
//responsible to update the corresponding field in the state
const todoApp = combineReducers({todos});

export default todoApp;

//selector
export const getVisibleToDos = (state, filter) =>
  fromToDos.getVisibleToDos(state.todos, filter);
