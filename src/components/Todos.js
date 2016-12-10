// @flow

import React from 'react'
import getters from 'modules/todos/getters'
import actions from 'modules/todos/actions'
import { connect } from 'nuclear-js-react-addons'

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newTodo: ''};
    }

    handleChange = (event) => {
        this.setState({newTodo: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.newTodo.length === 0) return
        actions.addTodo({title: this.state.newTodo, done: false})
        this.setState({newTodo: ''})
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
        const { todos } = this.props

        return (
            <section>
                <h2>Al Todos</h2>
                <ul>
                    <li><a href="/todo">Todo</a></li>
                    <li><a href="/done">Done</a></li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
                </form>
                <ul>
                    {todos.map((todo, index) => {
                        return <li key={index} onClick={() => this.toggleTodo(todo)}>{todo.get('done') ? (<strike>{todo.get('title')}</strike>) : todo.get('title')} | <a href="#" onClick={(event) => { event.stopPropagation(); this.deleteTodo(todo)}}>del</a></li>
                    }).toList()}
                </ul>
            </section>
        )
    }
}

function mapStateToProps(props) {
    return {
        todos: getters.todos
    }
}

const ConnectedTodos = connect(mapStateToProps)(Todos)
export default ConnectedTodos
