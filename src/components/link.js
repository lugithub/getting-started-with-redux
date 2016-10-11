//required
import React from 'react';

//presentational component
const Link =  ({onFilter, children, active}) => {
  return active ? <span>{children}</span> :
        <a href='#'
            onClick={e => {
              e.preventDefault();
              onFilter();
            }}
            >
            {children}
        </a>
};

export default Link;
