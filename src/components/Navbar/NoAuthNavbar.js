import React, { useState } from 'react'
import GenericNavBar from './GenericNavbar'
import { Button, Dropdown, Avatar, Menu } from 'antd'
// import { useHistory } from 'react-router'
import useWindowSize from './../../hooks/useWindowSize'
// import { TravelPath } from '../../constants/routerConstants'
import MenuNavbar from './MenuNavbar'
import GenericNavbarMobile from './GenericNavbarMobile'
import { whitePaperLink } from './../../constants/linksConstranst'
import { windowOpen } from '../../services/windowServices'
import { useTranslation } from 'react-i18next'

const NoAuthNavBar = ({ logout, authenticated, ...rest }) => {
    const { t } = useTranslation('commons')
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
                        onClick={() => windowOpen(whitePaperLink)}
                        className="ml-auto h-full btn tracking-wide text-xs lg:text-lg leading-none text-black-1 font-light hover:text-black-1 active:text-black-1 focus:text-black-1"
                    >
                        <span>{t('navbar.menus.white_paper')}</span>
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
                    <Menu className="border-r-0 -mx-24px mt-10">
                        <Menu.Divider className="flex md:hidden" />
                        <Menu.Item
                            onClick={() => {
                                windowOpen(whitePaperLink)
                            }}
                        >
                            {t('navbar.menus.white_paper')}
                        </Menu.Item>
                    </Menu>
                    {menu}
                </React.Fragment>
            }
        />
    )
}

export default NoAuthNavBar
