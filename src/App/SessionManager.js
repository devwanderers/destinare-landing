/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/reducers/globalActions'
import { lastLogginSelector } from './../store/reducers/auth/selectors'

class SessionManager extends Component {
    componentDidMount() {
        this.expiredSession()
    }

    expiredSession = () => {
        const { lastLoggin, logout } = this.props
        if (lastLoggin) {
            const now = new Date()
            const _lastLoggin = new Date(lastLoggin)
            const hour24 = 24 * 60 * 60 * 1000

            if (now.getTime() - _lastLoggin.getTime() >= hour24) {
                logout()
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = (state) => ({
    lastLoggin: lastLogginSelector(state),
})

const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) })

export default connect(mapStateToProps, mapDispatchToProps)(SessionManager)
