import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sleep } from '../../services/promises'
import SignUp from '../../views/AuthView/Forms/SignUp'
import { actionsAuth } from './../../store/reducers/auth/index'
// import windowOpen from './../../services/windowOpen'
// import { tripvixiaURL } from './../../constants/routerConstants'
// import windowOpen from '../../services/windowOpen'

const SignUpContainer = ({ signUp, signIn, sendMail, ...rest }) => {
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSetError = (errorMessage) => {
        setShowError(true)
        setErrorMessage(errorMessage)
    }

    const handleSubmitForm = (
        { confirmPassword, ...restValues },
        { setSubmitting }
    ) => {
        setShowError(false)
        signUp(restValues).then((resSignUp) => {
            if (resSignUp?.error) {
                handleSetError(resSignUp.payload?.message)
                sleep(() => {
                    setSubmitting(false)
                })
            } else {
                const { email, password } = restValues
                signIn({ email, password }).then((resSignIn) => {
                    if (resSignIn?.error) {
                        handleSetError(resSignIn.payload?.message)
                    } else {
                        const { user } = resSignIn.payload
                        console.log({ user })
                        if (!user?.mailSent) {
                            sendMail(email)
                        }
                    }
                })
            }
        })
    }
    return (
        <SignUp
            showError={showError}
            errorMessage={errorMessage}
            onSubmit={handleSubmitForm}
            {...rest}
        />
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    signUp: (userData) => dispatch(actionsAuth.signUp(userData)),
    signIn: (userData) => dispatch(actionsAuth.signIn(userData)),
    sendMail: (mail) => dispatch(actionsAuth.sendMail(mail)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
