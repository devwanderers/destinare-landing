/* eslint-disable no-unused-vars */
import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router'
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai'
import { IoMdAirplane } from 'react-icons/io'
// import { BsBook } from 'react-icons/bs'
import { LoginInPath, tripvixiaURL } from '../../constants/routerConstants'
import { windowOpen } from '../../services/windowServices'
import { useTranslation } from 'react-i18next'

const menusOptions = {
    travel: {
        icon: IoMdAirplane,
        onClick: () => windowOpen(tripvixiaURL),
        name: 'Travel Platform',
        t: 'navbar.menus.travel_platform',
    },
}

const menus = [menusOptions.travel]

const MenuNavbar = ({ authenticated, isMobile, logout, dropdown }) => {
    const { t } = useTranslation('commons')

    const history = useHistory()
    const _menu = menus
    let logOutItem =
        !authenticated && isMobile ? (
            <Menu.Item className="">
                <div
                    className="flex flex-row items-center"
                    onClick={() => history.push(LoginInPath)}
                >
                    <AiOutlineLogin className="mr-2 relative -mt-1" />
                    {t('login')}
                </div>
            </Menu.Item>
        ) : (
            <Menu.Item className="">
                <div
                    className="flex flex-row items-center"
                    onClick={() => logout()}
                >
                    <AiOutlineLogout className="mr-2 relative -mt-1" />{' '}
                    {t('logout')}
                </div>
            </Menu.Item>
        )
    if (!isMobile && !authenticated) {
        logOutItem = null
    }

    return (
        <Menu className="border-r-0 -mx-24px">
            <Menu.Divider className="flex md:hidden" />
            {_menu.map((menu) => {
                if (!authenticated && menu.name === 'Travel Platform')
                    return null
                return (
                    <Menu.Item key={`menu-item-${menu.name}`}>
                        <div
                            className="flex flex-row items-center"
                            onClick={menu.onClick}
                        >
                            <menu.icon className="mr-2 relative -mt-1" />{' '}
                            {menu?.t ? t(menu.t) : menu.name}
                        </div>
                    </Menu.Item>
                )
            })}
            <Menu.Divider className="flex" />
            {logOutItem}
        </Menu>
    )
}

export default MenuNavbar
