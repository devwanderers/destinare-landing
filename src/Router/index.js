import React, { Component } from 'react'
import { Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
import { createBrowserHistory } from 'history'
import withLayout from './../HOCS/withLayout'
import routes from './routes'

const history = createBrowserHistory()
// import { routes } from './routes'

const AsyncPage = loadable((props) => import(`../views/${props.page}`), {
    fallback: <div>...Loading</div>,
})

class AppRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <route.route
                                key={`route-${route.name}`}
                                path={route.path}
                                exact={route.exact}
                                component={withLayout((props) => {
                                    return route?.layout ? (
                                        <route.layout {...props}>
                                            <AsyncPage
                                                page={route.name}
                                                {...route?.componentProps}
                                            />
                                        </route.layout>
                                    ) : (
                                        <AsyncPage
                                            page={route.name}
                                            {...route?.componentProps}
                                        />
                                    )
                                })}
                            />
                        )
                    })}
                </Switch>
            </Router>
        )
    }
}

export default connect((state) => ({}), null)(AppRouter)
