// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'
import reactor from 'reactor'
import TodoStore from 'stores/TodoStore'

reactor.registerStores({
    'todos': TodoStore
})

ReactDOM.render(
    <App />,
    document.getElementById('flux-app')
)
