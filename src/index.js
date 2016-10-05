import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

//the reducers module has just a default export that i want to import and bind
//to an identifier, counter.
import counter from './reducers';

// Rest properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Spread properties
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }

const createStore = reducer => {
  let state;

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  let listeners = [];
  const subscribe = listener => {
    //impure ok
    listeners.push(listener);
    return () => listeners = listeners.filter(x => x !== listener);
  };

  //dummy action {}
  dispatch({});

  return { getState, dispatch, subscribe };
};

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
    //container component
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
