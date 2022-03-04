import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { sleep } from '../../services/promises'
import { signIn } from '../../store/reducers/auth/actions'
import Login from '../../views/AuthView/Forms/Login'
// import { tripvixiaURL } from './../../constants/s

const LoginContainer = ({ signIn, ...restProps }) => {
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
    signIn: (userData) => dispatch(signIn(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
