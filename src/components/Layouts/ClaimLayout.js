import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Layout } from 'antd'
import DefaultFooter from '../Footers/DefaultFooter'
import NoAuthNavbar from '../Navbar/NoAuthNavbar'

const { Content } = Layout

const ClaimLayout = ({ children, ...rest }) => {
    const [isOpen, setOpenDrawer] = useState(false)
    return (
        <Layout className="overflow-x-hidden flex flex-col min-h-screen">
            {/* <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={() => setOpenDrawer(!isOpen)}
                visible={isOpen}
                key="left"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer> */}
            <NoAuthNavbar
                {...rest}
                className="bg-gray-100"
                onClickBurguer={() => setOpenDrawer(!isOpen)}
                logoColor="#F9A24F"
            />
            <Content className="bg-white flex flex-1 flex-shrink flex-grow">
                {children}
            </Content>
            <DefaultFooter className="bg-white flex-1 flex-shrink flex-grow" />
        </Layout>
    )
}

ClaimLayout.propTypes = {
    children: PropTypes.element,
}

export default ClaimLayout
