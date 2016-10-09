import React from 'react';
import FilterLink from './filterLink';

const FilterToDo =  ({onFilter, currentFilter}) => {
  return <div>Show:
    <FilterLink filter='all' onFilter={onFilter}
                currentFilter={currentFilter}>
      All
    </FilterLink>{' '}
    <FilterLink filter='completed' onFilter={onFilter}
                currentFilter={currentFilter}>
      Completed
    </FilterLink>{' '}
    <FilterLink filter='active' onFilter={onFilter}
                currentFilter={currentFilter}>
      Active
    </FilterLink>
  </div>;
};

export default FilterToDo;
