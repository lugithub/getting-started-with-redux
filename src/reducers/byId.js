const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      //shallow cope
      const nextState = {...state};
      _.forEach(action.response, (todo, id) => nextState[id] = todo);

      //why not just action.response?
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
