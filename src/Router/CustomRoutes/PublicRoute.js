import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({ component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => {
                const _props = { ...props }
                const Component = component
                // Add Logic here
                return <Component {..._props} />
            }}
        />
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)
