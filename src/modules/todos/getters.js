// @flow

const todos = ['todos']

const done = [
    ['todos'],
    (todos) => todos.filter((value, key, iter) => value.get('done'))
]

const todo = [
    ['todos'],
    (todos) => todos.filter((value, key, iter) => !value.get('done'))
]

export default { todos, done, todo }
