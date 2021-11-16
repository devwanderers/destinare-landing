import React, { useState } from 'react'
import { Button, Dropdown, Avatar } from 'antd'
import { useHistory } from 'react-router'
import GenericNavBar from './GenericNavbar'
import { LoginInPath } from '../../constants/routerConstants'
import useWindowSize from './../../hooks/useWindowSize'
import GenericNavbarMobile from './GenericNavbarMobile'
import MenuNavbar from './MenuNavbar'

const DefaultNavbar = ({ authenticated, userData, logout, ...rest }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const history = useHistory()
    const { width } = useWindowSize()
    const handleShowDrawer = () => setShowDrawer(!showDrawer)

    let avatarTitle = ''
    if (userData?.firstName) {
        avatarTitle = `${userData.firstName
            .substring(0, 1)
            .toUpperCase()}${userData.lastName.substring(0, 1).toUpperCase()}`
    }

    let name = `${userData?.firstName} ${userData?.lastName}`

    if (name.length > 26) name = `${name.substring(0, 25)}...`
    if (avatarTitle === '') avatarTitle = 'U'

    const menu = (
        <MenuNavbar
            isMobile={width < 768}
            authenticated={authenticated}
            logout={logout}
        />
    )

    return width >= 768 ? (
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
                            <Dropdown
                                overlay={menu}
                                trigger={['click']}
                                placement="bottomRight"
                            >
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Avatar
                                        // className="gradient-g"
                                        style={{ backgroundColor: '#f9a24f' }}
                                        size="large"
                                    >
                                        {avatarTitle}
                                    </Avatar>
                                </a>
                            </Dropdown>
                        </div>
                    )}
                </React.Fragment>
            }
        />
    ) : (
        <GenericNavbarMobile
            {...rest}
            showDrawer={showDrawer}
            onClickBurguer={handleShowDrawer}
            contentDrawer={
                <React.Fragment>
                    {authenticated ? (
                        <div className="flex flex-col">
                            <Avatar
                                className="mb-4"
                                style={{ backgroundColor: '#f9a24f' }}
                                size="large"
                            >
                                {avatarTitle}
                            </Avatar>
                            <span className="font-medium mb-3">{name}</span>
                        </div>
                    ) : (
                        <div className="mb-10"></div>
                    )}
                    {menu}
                </React.Fragment>
            }
        />
    )
}

export default DefaultNavbar
