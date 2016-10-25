import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
//component has uppercase naming convention
import ToDoApp from './components/ToDoApp';

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/(:filter)' component={ToDoApp}/>
    </Router>
  </Provider>;

export default Root;
