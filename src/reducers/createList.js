const createList = filter => (state = [], action) => {
  if (action.filter !== filter) {
    return state;
  }
  return _.map(action.response, (todo, id) => id);
};

export default createList;

export const getIds = state => state;
