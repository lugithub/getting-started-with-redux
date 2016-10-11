//required
import React from 'react';
import {Component} from 'react';
import Link from './link';

//the downside is that visibilityFilter is passed from ToDoApp, FilterToDo,
//to FilterLink but the intermediate components don't use it.
//this breaks encapsulation.


//constainer component: has no markup.
// const FilterLink =  ({children, filter, store}) => {
//   //it could be a problem that doesn't subscribe to the store,
//   //if the parent component doesn't update.
//   //to solve the problem, use life cycle methods.
//   const visibilityFilter = store.getState().visibilityFilter;
//
//   return <Link onFilter={() => {
//     store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
//   }}
//   active={filter === visibilityFilter}>
//     {children}
//   </Link>;
// };

class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmont() {
    this.unsubscribe();
  }
  render() {
      const {store, filter, children} = this.props;
      const visibilityFilter = store.getState().visibilityFilter;

      return <Link onFilter={() => {
          store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
        }}
        active={filter === visibilityFilter}>
          {children}
      </Link>;
    }
}

export default FilterLink;
