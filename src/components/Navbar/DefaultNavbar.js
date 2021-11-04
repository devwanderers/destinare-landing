import React from 'react'
import { Button, Menu, Dropdown, Avatar } from 'antd'
import { useHistory } from 'react-router'
import GenericNavBar from './GenericNavbar'
import { LoginInPath } from '../../constants/routerConstants'
// import { SignInPath } from './../../constants/routerConstants'
import windowOpen from './../../services/windowOpen'

const DefaultNavbar = ({ authenticated, logout, ...rest }) => {
    const history = useHistory()
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <div
                    onClick={() =>
                        windowOpen(
                            'https://members.tripvixia.com/membership/signup?invite=0e3cb515-2949-4e1a-bb83-fd7fe4a5b251&referraltype=3'
                        )
                    }
                >
                    Travel Platform
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1" className="px-10">
                <div onClick={() => logout()}>Log out</div>
            </Menu.Item>
        </Menu>
    )
    return (
        <GenericNavBar
            {...rest}
            rightSection={
                <React.Fragment>
                    <Button
                        type="link"
                        className="h-full flex-1 btn tracking-wide text-xs lg:text-lg leading-none text-white font-light hover:text-white active:text-white focus:text-white"
                    >
                        <span>WHITE PAPER</span>
                    </Button>
                    {!authenticated && (
                        <Button
                            type="primary"
                            className="gradient-g focus:bg-red-300 focus:ring-2 ring-red-300 text-lg lg:text-xl leading-none h-full px-8 lg:px-10 tracking-wide rounded-none border-none p-0 m-0"
                            onClick={() => history.push(LoginInPath)}
                        >
                            Log In
                        </Button>
                    )}
                    {authenticated && (
                        <div className="h-full flex justify-center items-center">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Avatar
                                        // className="gradient-g"
                                        style={{ backgroundColor: '#f9a24f' }}
                                        size="large"
                                    >
                                        A
                                    </Avatar>
                                </a>
                            </Dropdown>
                        </div>
                    )}
                </React.Fragment>
            }
        />
    )
}

export default DefaultNavbar
