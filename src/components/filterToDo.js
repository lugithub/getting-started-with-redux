import React from 'react';
import FilterLink from './filterLink';

const FilterToDo = ({store}) => {
  return <div>Show:
    <FilterLink filter='all' store={store}>
      All
    </FilterLink>{' '}
    <FilterLink filter='completed' store={store}>
      Completed
    </FilterLink>{' '}
    <FilterLink filter='active' store={store}>
      Active
    </FilterLink>
  </div>;
};

export default FilterToDo;
