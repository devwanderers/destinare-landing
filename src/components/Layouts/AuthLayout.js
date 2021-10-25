import React from 'react'
import { Layout } from 'antd'

import DefaultFooter from './Footers/DefaultFooter'
import { SiderFilter } from './Siders/SiderFilter'

const { Header, Content } = Layout

const AuthLayout = ({ children }) => {
    return (
        <Layout className="min-h-screen bg-white">
            <SiderFilter />
            <Layout>
                <Header className=" ">
                    <div className="container flex flex-row items-center justify-between">
                        s
                    </div>
                </Header>
                <Content>{children}</Content>
                <DefaultFooter />
            </Layout>
        </Layout>
    )
}

AuthLayout.propTypes = {}

export default AuthLayout
