import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticatedSelector } from '../../store/reducers/auth/selectors'
import { HomePath } from '../../constants/routerConstants'

const PublicRoute = ({ component, authenticated, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => {
                let _props = {}
                let Component = component

                if (authenticated) {
                    Component = Redirect
                    _props.to = HomePath
                } else {
                    _props = { ...props }
                }

                return <Component {..._props} />
            }}
        />
    )
}

export default connect(
    (state) => ({
        authenticated: authenticatedSelector(state),
    }),
    null
)(PublicRoute)
