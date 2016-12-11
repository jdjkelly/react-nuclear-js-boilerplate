// @flow

import React from 'react'
import reactor from 'reactor'
import Todos from 'components/todos'
import Todo from 'components/todo'
import Done from 'components/done'
import { Provider } from 'nuclear-js-react-addons'
import { Router, Route, Link, browserHistory } from 'react-router'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider reactor={reactor}>
                <Router history={browserHistory}>
                    <Route path="/" component={Todos} />
                    <Route path="todo" component={Todo} />
                    <Route path="done" component={Done} />
                </Router>
            </Provider>
        )
    }
}

export default App;
