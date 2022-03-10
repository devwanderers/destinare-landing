import React, { useState } from 'react'
import { Dropdown, Avatar, Menu } from 'antd'
import { useHistory } from 'react-router'
import GenericNavBar from './GenericNavbar'
import { LoginInPath } from '../../constants/routerConstants'
import useWindowSize from './../../hooks/useWindowSize'
import GenericNavbarMobile from './GenericNavbarMobile'
import MenuNavbar from './MenuNavbar'
import { windowLocationPush, windowOpen } from '../../services/windowServices'
import { nomadzLink, whitePaperLink } from './../../constants/linksConstranst'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { cls } from './../../services/helpers'
import { scrollTo } from './../../services/react-scroll-utils'

const menuLinks = [
    {
        id: 'tokenomic',
        label: 'DESTINARE DIFFERENCE',
        onClick: () => scrollTo('tokenomics'),
    },
    {
        id: 'whitepaper',
        label: 'WHITEPAPER',
        onClick: () => windowOpen(whitePaperLink),
    },
    {
        id: 'nomadz',
        label: 'NOMADZLAND NFT',
        onClick: () => windowLocationPush(nomadzLink),
    },
]

const SocialMedia = () => {
    return (
        <div className="flex flex-row space-x-4 2xl:space-x-8 text-xl">
            <a
                className="border-4 border-yellow-1 text-yellow-1 hover:text-yellow-2 hover:border-yellow-2 h-10 w-10 flex justify-center items-center rounded-full"
                href="#"
                onClick={(e) => {
                    e.preventDefault()
                    windowOpen('https://discord.gg/JPx5v9Xv9g')
                }}
            >
                <span>
                    <FaDiscord />
                </span>
            </a>
            <a
                className="border-4 border-yellow-1 text-yellow-1 hover:text-yellow-2 hover:border-yellow-2 h-10 w-10 flex justify-center items-center rounded-full"
                href="#"
                onClick={(e) => {
                    e.preventDefault()
                    windowOpen('https://twitter.com/Destinare_io')
                }}
            >
                <span>
                    <FaTwitter />
                </span>
            </a>
        </div>
    )
}

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
            isMobile={width < 1024}
            authenticated={authenticated}
            logout={logout}
        />
    )

    return width > 768 ? (
        <GenericNavBar
            {...rest}
            rightSection={
                <div className="flex flex-1 items-center ml-6 lg:ml-12 xl:ml-64">
                    <div className="flex-1 flex flex-row justify-between xl:mr-24">
                        {menuLinks.map((m) => (
                            <button
                                key={`buttonlink-${m.id}`}
                                onClick={() => m.onClick()}
                                className={cls(`
                                tracking-wide text-xs lg:text-base h-10 border-black-1 text-black-1 font-light px-6 hover:border-b
                            `)}
                            >
                                {m.label}
                            </button>
                        ))}
                    </div>
                    <SocialMedia />
                    <div className="ml-auto flex flex-row items-center">
                        {!authenticated ? (
                            <button
                                className="h-10 bg-primary focus:bg-blue-8 text-white text-base lg:text-lg ml-6 2xl:ml-24 px-8 lg:px-16 tracking-wide border-none rounded-sm"
                                onClick={() => history.push(LoginInPath)}
                            >
                                Login
                            </button>
                        ) : (
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
                                            style={{
                                                backgroundColor: '#f9a24f',
                                            }}
                                            size="large"
                                        >
                                            {avatarTitle}
                                        </Avatar>
                                    </a>
                                </Dropdown>
                            </div>
                        )}
                    </div>
                </div>
            }
        />
    ) : (
        <GenericNavbarMobile
            {...rest}
            showDrawer={showDrawer}
            onClickBurguer={handleShowDrawer}
            burgerColor="#000"
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
                    <Menu className="border-r-0 -mx-24px">
                        <Menu.Divider className="flex md:hidden" />
                        {menuLinks.map((m) => (
                            <Menu.Item
                                key={`menulink-${m.id}`}
                                onClick={() => {
                                    handleShowDrawer()
                                    m.onClick()
                                }}
                            >
                                {m.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                    <div className="mb-8 mt-6 flex justify-center">
                        <SocialMedia />
                    </div>
                    {menu}
                </React.Fragment>
            }
        />
    )
}

export default DefaultNavbar
