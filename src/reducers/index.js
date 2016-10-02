export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, 0];
    case 'REMOVE':
      return [...state.slice(0, action.index), ...state.slice(action.index+1)];
    case 'INCREMENT':
      return [...state.slice(0, action.index), ++state[action.index],
      ...state.slice(action.index+1)];
    case 'DECREMENT':
      return [...state.slice(0, action.index), --state[action.index],
      ...state.slice(action.index+1)];
    default:
      //could return the initial state
      return state;
  }
};
