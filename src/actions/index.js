let id=0;

export const addToDo = text => ({
    type: 'ADD_TODO',
    id: id++,
    text
  });

export const toggleToDo = id => ({
    type: 'TOGGLE_TODO',
    id
  });

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  });
