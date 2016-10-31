import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './root';

const store = configureStore();

//because child container components subscribe to the store themselfvs
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
