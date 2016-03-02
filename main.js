import 'systemjs-hot-reloader/default-listener.js'

export function __reload(m) {
    if (m.component.state)
        component.setState(m.component.state)
}

import React from 'react'
import ReactDOM from 'react-dom'
import Test from './src/test'


export let component = ReactDOM.render(<Test />, document.getElementById("main"))