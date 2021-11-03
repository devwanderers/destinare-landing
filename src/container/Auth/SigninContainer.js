import React from 'react'
import { connect } from 'react-redux'
import Signin from '../../views/AuthView/Forms/Signin'
import { actionsAuth } from './../../store/reducers/auth/index'

const SigninContainer = ({ sendUserData, ...rest }) => {
    const handleSubmitForm = (values, { setSubmitting }) => {
        const { password, confirmPassword, ...user } = values

        sendUserData(user).then((res) => {
            console.log({ res })
            setTimeout(() => {
                setSubmitting(false)
            }, 400)
        })
    }
    return <Signin onSubmit={handleSubmitForm} {...rest} />
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    sendUserData: (userData) => dispatch(actionsAuth.sendUserData(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)
