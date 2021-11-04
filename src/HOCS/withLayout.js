import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authSelectors from '../store/reducers/auth/selectors'
import { logout } from '../store/reducers/globalActions'

const withLayout = (WrappedComponent) => {
    const HOC = class extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    HOC.displayName = 'WithLayout'
    return connect(
        (state) => ({
            authenticated: authSelectors.authenticatedSelector(state),
            userData: authSelectors.userDataSelector(state),
        }),
        (dispatch) => ({ logout: () => dispatch(logout()) })
    )(HOC)
}

export default withLayout
