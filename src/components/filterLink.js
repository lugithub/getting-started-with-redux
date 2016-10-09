//required
import React from 'react';

const FilterLink =  ({onFilter, children, filter, currentFilter}) => {
  return filter === currentFilter ? <span>{children}</span> :
        <a href='#'
            onClick={e => {
              e.preventDefault();
              onFilter(filter);
            }}
            >
            {children}
        </a>
};

export default FilterLink;
