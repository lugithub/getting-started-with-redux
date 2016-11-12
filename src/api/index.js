import {v4} from 'node-uuid';
import _ from 'lodash';

const db = {
  todos: {
    byId: {
      '2c25f00d-bd3d-4fca-a633-d1307c622aa8': {
        id:'2c25f00d-bd3d-4fca-a633-d1307c622aa8',
        text:'hey',
        completed:true
      },
      '3c25f00d-bd3d-4fca-a633-d1307c622aa8': {
        id:'3c25f00d-bd3d-4fca-a633-d1307c622aa8',
        text:'ho',
        completed:false
      }
    },
    allIds:[
      '2c25f00d-bd3d-4fca-a633-d1307c622aa8',
      '3c25f00d-bd3d-4fca-a633-d1307c622aa8'
    ]
  }
};

const delay = ms => new Promise((resolve, reject) =>setTimeout(resolve, ms)
);

export const fetchTodos = filter =>
  delay(5000).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('Boom!');
    }

    const {todos: {byId}} = db;

    switch (filter) {
      case 'all':
        return byId;
      case 'completed':
        return covertTodosToObject(_.filter(byId, {completed: true}));
      default:
        return covertTodosToObject(_.filter(byId, {completed: false}));
    }
  });

function covertTodosToObject(todos) {
  let x = {};
  return _.reduce(todos, (accumulator, todo) => {
    accumulator[todo.id] = todo;
    return accumulator;
  }, x);
}
