import todos from '../../src/reducers';

describe('counter', () => {
  it('should add a todo', () => {
    const state = todos(undefined, {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    });
    expect(state).toEqual([{
      id: 0,
      text: 'Learn Redux',
      completed: false
    }]);
  });

  it('should toggle a todo', () => {
    const state = todos([{id: 0, text: 'foo', completed: false},
    {id: 1, text: 'bar', completed: false},
    {id: 2, text: 'zee', completed: false}
  ], {type: 'TOGGLE_TODO', id: 1});
    expect(state).toEqual([{id: 0, text: 'foo', completed: false},
    {id: 1, text: 'bar', completed: true},
    {id: 2, text: 'zee', completed: false}]);
  });
});
