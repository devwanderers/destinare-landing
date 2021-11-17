import React from 'react'
import { Menu } from 'antd'
// import { useHistory } from 'react-router'
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai'
import { IoMdAirplane } from 'react-icons/io'
import { BsBook } from 'react-icons/bs'
// import { LoginInPath } from '../../constants/routerConstants'
// import { SignInPath } from './../../constants/routerConstants'
import windowOpen from './../../services/windowOpen'

const menusOptions = {
    travel: {
        icon: IoMdAirplane,
        onClick: () =>
            windowOpen(
                'https://members.tripvixia.com/membership/signup?invite=0e3cb515-2949-4e1a-bb83-fd7fe4a5b251&referraltype=3'
            ),
        name: 'Travel Platform',
    },
    whitePaper: {
        icon: BsBook,
        onClick: () => {},
        name: 'WHITE PAPER',
    },
}

const menus = [menusOptions.travel]
const menusMobile = [menusOptions.whitePaper, menusOptions.travel]

const MenuNavbar = ({ authenticated, isMobile, logout }) => {
    // const history = useHistory()
    const _menu = !isMobile ? menus : menusMobile
    let logOutItem =
        !authenticated && isMobile ? (
            <Menu.Item className="">
                <div
                    className="flex flex-row items-center"
                    onClick={() =>
                        windowOpen(
                            'https://members.tripvixia.com/membership/signup?invite=0e3cb515-2949-4e1a-bb83-fd7fe4a5b251&referraltype=3'
                        )
                    }
                >
                    <AiOutlineLogin className="mr-2 relative -mt-1" /> Get
                    Started
                </div>
            </Menu.Item>
        ) : (
            <Menu.Item className="">
                <div
                    className="flex flex-row items-center"
                    onClick={() => logout()}
                >
                    <AiOutlineLogout className="mr-2 relative -mt-1" /> Log out
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
                            {menu.name}
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
