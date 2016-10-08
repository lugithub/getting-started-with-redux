import todos from './todos';
import visibilityFilter from './visibilityFilter';
import {combineReducers} from 'redux';

//todos key is the key of the corresponding field in the state
//todos value is the reducer
//responsible to update the corresponding field in the state
export default combineReducers({todos, visibilityFilter});
