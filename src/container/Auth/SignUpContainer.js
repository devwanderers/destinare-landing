import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sleep } from '../../services/promises'
import SignUp from '../../views/AuthView/Forms/SignUp'
import { actionsAuth } from './../../store/reducers/auth/index'
// import { useGetUserBalance } from './../../hooks/web3Hooks/useNFTs'
// import { useWeb3React } from '@web3-react/core'

const SignUpContainer = ({ signUp, signIn, sendMail, ...rest }) => {
    // const { account } = useWeb3React()
    // const { data: userBalance } = useGetUserBalance()
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSetError = (errorMessage) => {
        setShowError(true)
        setErrorMessage(errorMessage)
    }

    const handleSubmitForm = (
        { confirmPassword, email, ...restValues },
        { setSubmitting }
    ) => {
        setShowError(false)
        const _email = email.toLowerCase()
        signUp({
            walletAddress: '',
            email: _email,
            ...restValues,
        }).then((resSignUp) => {
            if (resSignUp?.error) {
                handleSetError(resSignUp.payload?.message)
                sleep(() => {
                    setSubmitting(false)
                })
            } else {
                const { password } = restValues
                signIn({ email: _email, password }).then((resSignIn) => {
                    if (resSignIn?.error) {
                        handleSetError(resSignIn.payload?.message)
                    } else {
                        const { user } = resSignIn.payload
                        if (!user?.mailSent) {
                            sendMail(email)
                        }
                    }
                })
            }
        })
    }

    // const disableSignUp = useMemo(() => {
    //     return !userBalance || userBalance === 0
    // }, [userBalance])

    return (
        <SignUp
            showError={showError}
            errorMessage={errorMessage}
            onSubmit={handleSubmitForm}
            // disabled={disableSignUp}
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
