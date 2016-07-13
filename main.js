import 'systemjs-hot-reloader/default-listener.js'

export function __reload(m) {
    if (m.component.state)
        component.setState(m.component.state)
}

import React from 'react'
import ReactDOM from 'react-dom'
import Test from 'app/test'

export let component = ReactDOM.render(React.createElement(Test), document.getElementById("main"))