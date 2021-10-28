import React, { Component } from 'react'
import { connect } from 'react-redux'

const withLayout = (WrappedComponent) => {
    const HOC = class extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    HOC.displayName = 'WithLayout'
    return connect((state) => ({}), null)(HOC)
}

export default withLayout
