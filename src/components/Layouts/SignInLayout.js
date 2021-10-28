import React from 'react'
import { PropTypes } from 'prop-types'
import { Layout } from 'antd'
import DefaultFooter from '../Footers/DefaultFooter'

const { Content } = Layout

const SignInLayout = ({ children }) => {
    return (
        <Layout className="overflow-scroll overflow-x-hidden flex flex-col min-h-screen">
            <Content className="bg-white flex flex-1 flex-shrink flex-grow">
                {children}
            </Content>
            <DefaultFooter className="bg-white flex-1 flex-shrink flex-grow" />
        </Layout>
    )
}

SignInLayout.propTypes = {
    children: PropTypes.element,
}

export default SignInLayout
