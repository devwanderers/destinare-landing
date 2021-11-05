import React from 'react'
import { Layout, Drawer } from 'antd'
import { LogoSVG } from '../../assets/svg/brand/index'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'

const { Header } = Layout

const GenericNavbarMobile = ({
    burgerColor = '#fff',
    className = '',
    contentDrawer,
    showDrawer,
    onClickBurguer,
    hideLogo,
}) => {
    const history = useHistory()
    return (
        <React.Fragment>
            <Drawer
                placement="left"
                closable={true}
                onClose={onClickBurguer}
                visible={showDrawer}
                key="left"
            >
                {contentDrawer}
            </Drawer>
            <Header
                className={`h-16 md:h-20 z-10 px-2 lg:px-0 py-2 md:py-4 m-0 ${className}`}
            >
                <div className="section relative flex justify-center px-2 md:px-8 h-full">
                    <a className="h-full absolute left-0 top-0 bottom-0">
                        <div
                            onClick={onClickBurguer}
                            className="flex items-center justify-center text-2xl h-full px-4 cursor-pointer  transform  active:scale-125 "
                            style={{ color: burgerColor }}
                        >
                            <GiHamburgerMenu height="100%" />
                        </div>
                    </a>
                    {!hideLogo && (
                        <a
                            className="h-full w-48"
                            onClick={() => history.push(HomePath)}
                        >
                            <div
                                // onClick={onClickBurguer}
                                className="flex h-full cursor-pointer text-black-1"
                            >
                                <LogoSVG />
                            </div>
                        </a>
                    )}
                </div>
            </Header>
        </React.Fragment>
    )
}

export default GenericNavbarMobile
