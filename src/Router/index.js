import React, { Component } from 'react'
import { Router } from 'react-router'
// import { Switch } from 'react-router'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
// import { routes } from './routes'

class AppRouter extends Component {
    render() {
        return (
            <Router history={history}>
                {/* <Switch>{routes.map((route, index) => <Route path render{route.component})}</Switch> */}
            </Router>
        )
    }
}

export default connect((state) => ({}), null)(AppRouter)
