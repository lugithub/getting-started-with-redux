import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//reducer has lowercase naming convertion
import todoApp from './reducers';

//component has uppercase naming convention
import ToDoApp from './components/ToDoApp';

const persistedState = {
  todos:[{id: 0, text: 'www', completed: false},
    {id: 1, text: 'com', completed: true}
  ],
  visibilityFilter: 'active'
};

const store = createStore(todoApp, persistedState);

const rawDispatch = store.dispatch;
store.dispatch = action => {
  console.group('%cdispatching action: ', 'color: green', action);
  console.log('%cprevious state: ', 'color: green', store.getState());
  rawDispatch(action);
  console.log('%ccurrent state: ', 'color: green', store.getState());
  console.groupEnd();
};

//because child container components subscribe to the store themselfvs
ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
document.getElementById('root'));
