import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HomePath } from '../../constants/routerConstants'
import { authenticatedSelector } from '../../store/reducers/auth/selectors'

const PrivateRoute = ({ component, authenticated, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => {
                let _props = {}
                let Component = component
                if (!authenticated) {
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

const mapStateToProps = (state) => ({
    authenticated: authenticatedSelector(state),
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
