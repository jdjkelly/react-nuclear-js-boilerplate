// @flow

const todos = ['todos']

const done = [
    ['todos'],
    (todos) => todos.filter((value, key, iter) => value.done)
]

const todo = [
    ['todos'],
    (todos) => todos.filter((value, key, iter) => !value.done)
]

export default { todos, done, todo }
