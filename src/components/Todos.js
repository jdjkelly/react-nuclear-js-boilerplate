import React from 'react'
import getters from '../getters'
import actions from '../actions'
import { connect } from 'nuclear-js-react-addons'

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos } = this.props

        return (
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo.get('title')} | {todo.get('done').toString()}</li>
                }).toList()}
            </ul>
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
