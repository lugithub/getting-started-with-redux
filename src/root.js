import React from 'react';
import {Provider} from 'react-redux';
//component has uppercase naming convention
import ToDoApp from './components/ToDoApp';

const Root = ({store}) =>
  <Provider store={store}>
    <ToDoApp/>
  </Provider>;

export default Root;
