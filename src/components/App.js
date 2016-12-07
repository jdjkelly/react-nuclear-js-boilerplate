// @flow

import React from 'react'
import reactor from 'reactor'
import Todos from 'components/todos'
import { Provider } from 'nuclear-js-react-addons'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider reactor={reactor}>
                <Todos />
            </Provider>
        )
    }
}

export default App;
