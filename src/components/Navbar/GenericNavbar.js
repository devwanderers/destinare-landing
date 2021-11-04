import React from 'react'
import { Layout } from 'antd'
import { DestinareLogoColorSVG } from '../../assets/svg/brand/index'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'

const { Header } = Layout

const GenericNavBar = ({ className = '', middleSection, rightSection }) => {
    const history = useHistory()
    return (
        <Header
            className={` h-16 md:h-20 z-10 px-2 lg:px-0 py-2 md:py-4 m-0 ${className}`}
        >
            <div className="section flex justify-end px-2 md:px-8 h-full">
                <a
                    className="h-full w-48"
                    onClick={() => history.push(HomePath)}
                >
                    <div
                        // onClick={onClickBurguer}
                        className="flex h-full cursor-pointer text-black-1"
                    >
                        <DestinareLogoColorSVG />
                    </div>
                </a>
                <div className="flex-1">{middleSection}</div>
                <div className="space-x-5 flex h-full p-0 m-0">
                    {rightSection}
                </div>
            </div>
        </Header>
    )
}

export default GenericNavBar
