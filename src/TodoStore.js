import { Store, toImmutable } from 'nuclear-js'
import { ADD_TODO, DELETE_TODO, DO_TODO, UNDO_TODO } from './actionTypes'

export default Store({
    getInitialState() {
        return toImmutable([
            {
                title: "Make Nuclear.js project",
                done: false
            }
        ])
    },

    initialize() {
        this.on(ADD_TODO, addTodo)
        this.on(DELETE_TODO, removeTodo)
        this.on(DO_TODO, doTodo)
        this.on(UNDO_TODO, undoTodo)
    }
})

function addTodo(state, { todo }) {
    return state.push(todo)
}

function removeTodo(state, { todo }) {
    let keyOf;
    if (keyOf = state.keyOf(todo)) {
        return state.delete(keyOf);
    } else {
        return state;
    }
}

function doTodo(state, { todo }) {
    let keyOf;
    if (keyOf = state.keyOf(todo)) {
        return state.update(keyOf, (todo) => {
            todo.done = true;
            return todo;
        })
    } else {
        return state;
    }
}

function undoTodo(state, { todo }) {
    let keyOf;
    if (keyOf = state.keyOf(todo)) {
        return state.update(keyOf, (todo) => {
            todo.done = false;
            return todo;
        })
    } else {
        return state;
    }
}

