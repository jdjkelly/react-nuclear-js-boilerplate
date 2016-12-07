import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.js'
import reactor from './reactor.js'
import TodoStore from './TodoStore.js'

reactor.registerStores({
    'todos': TodoStore
})

ReactDOM.render(
    <App />,
    document.getElementById('flux-app')
)
