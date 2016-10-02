import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';

//the reducers module has just a default export that i want to import and bind
//to an identifier, counter.
import counter from './reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const rawDispatch = store.dispatch;
store.dispatch = action => {
  console.log('%cdispatching action: ', 'color: green', action);
  rawDispatch(action);
};

const render = () => {
  const counters = store.getState().map((value, index) =>
  <div key={index}>
    <Counter
      value={value}
      onIncrement={() => store.dispatch({ type: 'INCREMENT', index })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT', index })}
    />
    <button onClick={() => store.dispatch({ type: 'REMOVE', index })}>
      Remove counter
    </button>
  </div>);

  ReactDOM.render(
  <div>
    {counters}
    <button onClick={() => store.dispatch({type: 'ADD'})} >Add counter</button>
  </div>,
  rootEl
)};

render();
store.subscribe(render);
store.subscribe(() => {
  console.log('%ccurrent state: ', 'color: green', store.getState());
});
console.log('%ccurrent state: ', 'color: green', store.getState());
