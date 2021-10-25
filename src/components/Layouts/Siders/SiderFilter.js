import React, { useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import useWindowDimensions from '../../../customHooks/useWindowDimensions'

const siderWidthByWindowsWidth = (windowWidth) => {
    if (windowWidth > 600) {
        return 375
    } else if (windowWidth > 815) {
        return 475
    } else {
        return '100%'
    }
}

const { Sider } = Layout
const { SubMenu } = Menu

export const SiderFilter = () => {
    const [collapsed, setcollapse] = useState(false)
    const { width } = useWindowDimensions()
    const siderWidth = siderWidthByWindowsWidth(width)
    const handleCollapse = () => {
        setcollapse(!collapsed)
    }
    return (
        <Sider
            className="bg-gray-200"
            collapsible
            collapsed={collapsed}
            onCollapse={handleCollapse}
            width={siderWidth}
            trigger={null}
        >
            <div className="logo" />
            <ul className="custom-menu-filter w-full bg-white">
                <li className="custom-menu-filter-item flex justify-between">
                    <span>Option</span>
                </li>
            </ul>
            <Menu defaultSelectedKeys={['1']} mode="inline" className="mt-5">
                <Menu.Item
                    className="menu-item-filter"
                    key="1"
                    onClick={handleCollapse}
                >
                    Filter
                </Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <SubMenu key="sub1" title="User">
                    <Button>asdasd</Button>
                </SubMenu>
                <SubMenu key="sub2" title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">Files</Menu.Item>
            </Menu>
        </Sider>
    )
}
