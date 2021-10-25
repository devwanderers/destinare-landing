import React from 'react'
import { Layout } from 'antd'
import DefaultFooter from './Footers/DefaultFooter'
// import 'rc-footer/assets/index.css'

const { Header, Content } = Layout

const NoAuthLayout = ({ children }) => {
    return (
        <Layout className="min-h-screen">
            <Header className="border-gray-200 border-b-0 py-6 md:pt-10 sm:py-2">
                {/* <div className="container flex flex-row items-center justify-between">
                    s
                </div> */}
            </Header>
            <Content>{children}</Content>
            <DefaultFooter />
        </Layout>
    )
}

export default NoAuthLayout
