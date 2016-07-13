# React JSPM beta 
Hot Reloading example

## Start from empty project
- npm initial `npm init -y`
- install chokidar-socket-emitter `npm i chokidar-socket-emitter -D`
- install jspm-server `npm i jspm-server -D`
- install jspm beta `npm i jspm@beta -D`
- jspm initial `jspm init -y`
- install react and react-dom `jspm i react react-dom`
- Hot Reloading `jspm install --dev systemjs-hot-reloader`
    - Update the `main.js` file to initiate hot reloading by importing the hot-reloader listener, and then also providing a `__reload` hook to maintain the internal component state over hot-reload updates:
    ```json
    import 'systemjs-hot-reloader/default-listener.js'

    export function __reload(m) {
        if (m.component.state)
            component.setState(m.component.state)
    }

    import React from 'react'
    import ReactDOM from 'react-dom'
    import Test from 'app/test'

    export let component = ReactDOM.render(React.createElement(Test), document.getElementById("main"))
    ```
    - Next edit the `jspm.config.js` file to include `trace: true`, so that it reads:
    ```json
    SystemJS.config({
        browserConfig: {
            "trace": true,
            "paths": {
            "npm:": "/jspm_packages/npm/",
            "github:": "/jspm_packages/github/",
            "app/": "/src/"
            }
        },
        ...
    })
    ```
- install JSX Babel Plugin `jspm install --dev npm:babel-plugin-transform-react-jsx core-js`
    - Inside of `jspm.config.js` under the `app` packages entry, add this plugin to Babel using package configuration metadata:
    ```json
    SystemJS.config({
        ...

        packages: {
            "app": {
            "main": "test.js",
            "meta": {
                "*.js": {
                "loader": "plugin-babel",
                "babelOptions": {
                    "plugins": [
                    "babel-plugin-transform-react-jsx"
                    ]
                }
                }
            }
            }
        }
    })
    ```
- read document carefully [jspm docs](http://jspm.io)

## Usage
- `npm i`
- `jspm i`
- `npm start`
