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

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
        id: v4(),
        text,
        completed: false,
    };
    db.todos.byId[todo.id] = todo;
    db.todos.allIds.push(todo.id);
    return todo;
  });

export const toggleTodo = id =>
    delay(500).then(() => {
      let todo = db.todos.byId[id];
      todo.completed = !todo.completed;
      return todo;
    });

export const fetchTodos = filter =>
  delay(500).then(() => {
    const {todos: {byId}} = db;

    switch (filter) {
      case 'all':
        return _.map(byId, value => value);
      case 'completed':
        return _.filter(byId, {completed: true});
      default:
        return _.filter(byId, {completed: false});
    }
  });
