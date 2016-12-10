// @flow

import reactor from 'reactor'

import actions from './actionTypes'

export default {
    addTodo(todo) {
        reactor.dispatch(actions.ADD_TODO, { todo })
    },

    deleteTodo(todo) {
        reactor.dispatch(actions.DELETE_TODO, { todo })
    },

    doTodo(todo) {
        reactor.dispatch(actions.DO_TODO, { todo })
    },

    undoTodo(todo) {
        reactor.dispatch(actions.UNDO_TODO, { todo })
    }
}
