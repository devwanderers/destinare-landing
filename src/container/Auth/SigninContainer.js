import React from 'react'
import { connect } from 'react-redux'
import Signin from '../../views/AuthView/Forms/Signin'
import { actionsAuth } from './../../store/reducers/auth/index'
import windowOpen from './../../services/windowOpen'

const SigninContainer = ({ sendUserData, ...rest }) => {
    const handleSubmitForm = (values, { setSubmitting }) => {
        const { password, confirmPassword, ...user } = values

        sendUserData(user).then((res) => {
            console.log(res?.payload?.data)
            if (res?.payload?.data && !res?.payload?.data?.error) {
                console.log(res?.payload?.data)
                windowOpen(res.payload.data)
            }

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
