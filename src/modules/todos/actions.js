// @flow

import reactor from 'reactor'

import actions from './actionTypes'

export default {
    addTodo(todo) {
        reactor.dispatch(ADD_TODO, { todo })
    },

    deleteDelete(todo) {
        reactor.dispatch(DELETE_TODO, { todo })
    },

    doTodo(todo) {
        reactor.dispatch(DO_TODO, { todo })
    },

    undoTodo(todo) {
        reactor.dispatc(DO_TODO, { todo })
    }
}
