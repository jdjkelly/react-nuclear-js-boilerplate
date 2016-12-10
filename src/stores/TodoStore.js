// @flow

import { Store, toImmutable } from 'nuclear-js'
import actions from 'modules/todos/actionTypes'

export default Store({
    getInitialState() {
        return toImmutable([
            {
                title: "Make Nuclear.js project",
                done: false
            }
        ])
    },

    initialize(): void {
        this.on(actions.ADD_TODO, addTodo)
        this.on(actions.DELETE_TODO, removeTodo)
        this.on(actions.DO_TODO, doTodo)
        this.on(actions.UNDO_TODO, undoTodo)
    }
})

function addTodo(state, { todo }) {
    return state.push(toImmutable(todo))
}

function removeTodo(state, { todo }) {
    const keyOf = state.keyOf(todo);
    if (keyOf !== undefined) {
        return state.delete(keyOf);
    } else {
        return state;
    }
}

function doTodo(state, { todo }) {
    const keyOf = state.keyOf(todo)
    if (keyOf !== undefined) {
        return state.update(keyOf, (todo) => {
            return todo.set('done', true);
        })
    } else {
        return state;
    }
}

function undoTodo(state, { todo }) {
    const keyOf = state.keyOf(todo)
    if (keyOf !== undefined) {
        return state.update(keyOf, (todo) => {
            return todo.set('done', false)
        })
    } else {
        return state;
    }
}

