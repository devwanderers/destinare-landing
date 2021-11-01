import React from 'react'
import { connect } from 'react-redux'
import Login from '../../views/AuthView/Forms/Login'
import { actionsAuth } from './../../store/reducers/auth/index'

const LoginContainer = ({ authenticateUser, ...restProps }) => {
    const handleSubmitForm = (values, { setSubmitting }) => {
        setTimeout(() => {
            authenticateUser(values)
            setSubmitting(false)
        }, 400)
    }

    return <Login onSubmit={handleSubmitForm} {...restProps} />
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    authenticateUser: (authData) =>
        dispatch(actionsAuth.authenticateUser(authData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
