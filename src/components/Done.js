// @flow

import React from 'react'
import getters from 'modules/todos/getters'
import actions from 'modules/todos/actions'
import { connect } from 'nuclear-js-react-addons'
import { Link } from 'react-router'
import Nav from 'components/nav'

class Done extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleTodo(todo) {
        if (todo.get('done')) {
            actions.undoTodo(todo);
        } else {
            actions.doTodo(todo);
        }
    }

    deleteTodo(todo) {
        actions.deleteTodo(todo);
    }

    render() {
        const { done } = this.props

        return (
            <section>
                <h2>Done</h2>
                <Nav/>
                <ul>
                    {done.map((todo, index) => {
                        return <li key={index} onClick={() => this.toggleTodo(todo)}>{todo.get('done') ? (<strike>{todo.get('title')}</strike>) : todo.get('title')} | <a href="#" onClick={(event) => { event.stopPropagation(); this.deleteTodo(todo)}}>del</a></li>
                    }).toList()}
                </ul>
            </section>
        )
    }
}

function mapStateToProps(props) {
    return {
        done: getters.done
    }
}

const ConnectedDone = connect(mapStateToProps)(Done)
export default ConnectedDone
