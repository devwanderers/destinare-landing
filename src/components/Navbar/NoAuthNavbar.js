import React, { useState } from 'react'
import GenericNavBar from './GenericNavbar'
import { Button, Dropdown, Avatar } from 'antd'
// import { useHistory } from 'react-router'
import useWindowSize from './../../hooks/useWindowSize'
// import { TravelPath } from '../../constants/routerConstants'
import MenuNavbar from './MenuNavbar'
import GenericNavbarMobile from './GenericNavbarMobile'

const NoAuthNavBar = ({ logout, authenticated, ...rest }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    // const history = useHistory()
    const { width } = useWindowSize()
    const handleShowDrawer = () => setShowDrawer(!showDrawer)

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
                        className="h-full flex-1 btn tracking-wide text-xs lg:text-lg leading-none text-black-1 font-light hover:text-black-1 active:text-black-1 focus:text-black-1"
                    >
                        <span>WHITE PAPER</span>
                    </Button>{' '}
                    {authenticated && (
                        <div className="h-full flex justify-center items-center">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Avatar
                                        style={{ backgroundColor: '#f9a24f' }}
                                        size="large"
                                    >
                                        U
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
            burgerColor="black"
            hideLogo
            contentDrawer={
                <React.Fragment>
                    <div className="mb-10"></div>
                    {menu}
                </React.Fragment>
            }
        />
    )
}

export default NoAuthNavBar
