let id=0;

export function addToDo(text) {
  return {
    type: 'ADD_TODO',
    id: id++,
    text
  };
};

export function toggleToDo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
