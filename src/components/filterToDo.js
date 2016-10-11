import React from 'react';
import FilterLink from './filterLink';

const FilterToDo = () => {
  return <div>Show:
    <FilterLink filter='all'>
      All
    </FilterLink>{' '}
    <FilterLink filter='completed'>
      Completed
    </FilterLink>{' '}
    <FilterLink filter='active'>
      Active
    </FilterLink>
  </div>;
};

export default FilterToDo;
