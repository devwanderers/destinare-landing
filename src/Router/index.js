import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import loadable from '@loadable/component'

import withLayout from './../HOCS/withLayout'
import routes from './routes'
import PageLoading from './../components/PageLoadings/PageLoading'
// import { HomePath, SignInPath } from '../constants/routerConstants'
// import SignInLayout from '../components/Layouts/SignInLayout'

// const LandingPage = loadable(() => import('../views/LandingPage'))
// const SigninView = loadable(() => import('../views/SigninView'))

// const AsyncPage = loadable((props) => import(`../views/${props.page}`))

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <route.route
                                key={`route-${route.name}`}
                                path={route.path}
                                exact={route.exact}
                                component={withLayout((props) => {
                                    const Component = loadable(
                                        () => import(`../views/${route.name}`),
                                        {
                                            fallback: <PageLoading />,
                                        }
                                    )
                                    return route?.layout ? (
                                        <route.layout {...props}>
                                            <Component
                                                {...route?.componentProps}
                                            />
                                        </route.layout>
                                    ) : (
                                        <Component
                                            {...props}
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
