import React from 'react'
import { Layout } from 'antd'
import { GiHamburgerMenu } from 'react-icons/gi'

const { Header } = Layout

const GenericNavBar = ({
    className = '',
    middleSection,
    rightSection,
    onClickBurguer,
}) => {
    return (
        <Header
            className={` h-16 md:h-20 z-10 px-0 py-2 md:py-4 m-0 ${className}`}
        >
            <div className="section flex justify-between px-2 md:px-8 h-full">
                <a className="h-full">
                    <div
                        onClick={onClickBurguer}
                        className="flex items-center justify-center text-2xl h-full px-4 cursor-pointer text-black-1 transform  active:scale-125 "
                    >
                        <GiHamburgerMenu height="100%" />
                    </div>
                </a>
                <div className="flex-1">{middleSection}</div>
                <div className="space-x-5 hidden md:flex h-full p-0 m-0">
                    {rightSection}
                </div>
            </div>
        </Header>
    )
}

export default GenericNavBar
