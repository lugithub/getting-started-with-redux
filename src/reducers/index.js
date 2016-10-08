import todos from './todos';
import visibilityFilter from './visibilityFilter';

//todos key is the key of the corresponding field in the state
//todos value is the reducer
//responsible to update the corresponding field in the state
export default combineReducers({todos, visibilityFilter});

//functional programming: takes functions and returns a function
function combineReducers(reducers) {

  //it is still a pure function
  return (state = {}, action) => {

    const keys = Object.keys(reducers);

    // return keys.reduce((previouseState, key) => ({
    //     ...previouseState,
    //
    //     //computed property name
    //     [key]: reducers[key](state[key], action)
    //   }),
    //   state
    // );

    return keys.reduce((previouseState, key) => {
        previouseState[key] = reducers[key](state[key], action);
        return previouseState;
      },
      {} //initial value is mutable
    );

  };

}
