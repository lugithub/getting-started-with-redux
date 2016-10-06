//should state default to {} ?
export default function todo(state, action) {
  const {id, text} = action;

  switch (action.type) {
    case 'ADD_TODO':
      return {id, text, completed: false};

    case 'TOGGLE_TODO':
      if (state.id === id) {
        return {...state, completed: !state.completed};
      } else {
        return state;
      }
      
    default:
      //could return the initial state
      return state;
  }
}
