import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { sleep } from '../../services/promises'
import * as actionsAuth from '../../store/reducers/auth/actions'
import Login from '../../views/AuthView/Forms/Login'
// import { tripvixiaURL } from './../../constants/s

const LoginContainer = ({ signIn, sendMail, ...restProps }) => {
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSetError = (errorMessage) => {
        setShowError(true)
        setErrorMessage(errorMessage)
    }
    const handleSubmitForm = (
        { emailOrUsername, password },
        { setSubmitting }
    ) => {
        setShowError(false)
        signIn({ email: emailOrUsername, password }).then((resSignIn) => {
            if (resSignIn?.error) {
                if (resSignIn.payload?.message === 'InvalidCredentials') {
                    handleSetError(
                        'There was a problem logging in. Please check your email and password'
                    )
                } else if (resSignIn.payload?.message) {
                    handleSetError(resSignIn.payload?.message)
                } else {
                    handleSetError('Internar server error')
                }
            } else {
                const { user } = resSignIn.payload
                if (!user?.mailSent) {
                    sendMail(emailOrUsername)
                }
            }
            // else {
            //     windowOpen(tripvixiaURL)
            //     sleep(() => {
            //         setSubmitting(false)
            //     })
            // }
        })
    }

    return (
        <Login
            showError={showError}
            errorMessage={errorMessage}
            onSubmit={handleSubmitForm}
            {...restProps}
        />
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    signIn: (userData) => dispatch(actionsAuth.signIn(userData)),
    sendMail: (mail) => dispatch(actionsAuth.sendMail(mail)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
