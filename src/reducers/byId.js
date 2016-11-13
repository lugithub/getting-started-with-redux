const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        [action.response.id]: action.response
      };
    case 'FETCH_TODOS_SUCCESS':
      //shallow cope
      let nextState = {...state, ...action.response};
      //why not just action.response?
      //byId should contain both active and completed todos
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
