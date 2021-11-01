import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signin from '../../views/AuthView/Forms/Signin'

class SigninContainer extends Component {
    handleSubmitForm = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }

    render() {
        return <Signin onSubmit={this.handleSubmitForm} {...this.props} />
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)
