//required
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Link from './link';
import {setVisibilityFilter} from '../actions';

//containerComponentProps is the props of the generated constainer component
const mapStateToProps = (state, containerComponentProps) => ({
    active: containerComponentProps.filter === state.visibilityFilter
});

const mapDispathToProps = (dispatch, containerComponentProps) => ({
    onFilter: () =>
    dispatch(setVisibilityFilter(containerComponentProps.filter))
  }
);

const FilterLink = connect(mapStateToProps, mapDispathToProps)(Link);

export default FilterLink;
