import React from 'react';
import FilterLink from './filterLink';

const FilterToDo =  ({onFilter, visibilityFilter}) => {
  return <div>Show:
    <FilterLink filter='all' onFilter={onFilter}
                visibilityFilter={visibilityFilter}>
      All
    </FilterLink>{' '}
    <FilterLink filter='completed' onFilter={onFilter}
                visibilityFilter={visibilityFilter}>
      Completed
    </FilterLink>{' '}
    <FilterLink filter='active' onFilter={onFilter}
                visibilityFilter={visibilityFilter}>
      Active
    </FilterLink>
  </div>;
};

export default FilterToDo;
