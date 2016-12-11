import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li><Link to="/">All</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li><Link to="/done">Done</Link></li>
            </ul>
        )
    }
}
