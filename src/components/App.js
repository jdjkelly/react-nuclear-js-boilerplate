// @flow

import React from 'react'
import reactor from 'reactor'
import { Provider } from 'nuclear-js-react-addons'
import { Router, Route, Link, browserHistory } from 'react-router'
import Todos from 'components/Todos'

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider reactor={reactor}>
                <Router history={browserHistory}>
                    <Route path="/" component={Todos} />
                    <Route path="todo" getComponent={(nextState, cb) => {
                        System.import('components/Todo').then(loadRoute(cb)).catch(errorLoading);
                    }} />
                    <Route path="done" getComponent={(nextState, cb) => {
                        System.import('components/Done').then(loadRoute(cb)).catch(errorLoading);
                    }} />
                </Router>
            </Provider>
        )
    }
}

export default App;
