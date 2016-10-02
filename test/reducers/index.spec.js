import counter from '../../src/reducers';

describe('counter', () => {
  it('should add a counter', () => {
    const counters = counter(undefined, {type: 'ADD'});
    expect(counters).toEqual([0]);
  });

  it('should increase a counter', () => {
    const counters = counter([0,0,0], {type: 'INCREMENT', index: 1});
    expect(counters).toEqual([0,1,0]);
  });
});
