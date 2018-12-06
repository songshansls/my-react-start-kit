import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import { MuiThemeProvider } from '@material-ui/core'
import theme from 'theme.js'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import style from 'index.css'

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Router>
,document.getElementById('root'))

document.getElementById('root').id = style.root
