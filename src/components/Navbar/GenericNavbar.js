import React from 'react'
import { Layout } from 'antd'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'
import LogoIconSVG from './../../assets/svg/brand/LogoIconSVG'

const { Header } = Layout

const GenericNavBar = ({
    className = '',
    middleSection,
    rightSection,
    logoColor = '#fff',
}) => {
    const history = useHistory()
    return (
        <React.Fragment>
            <Header
                className={` h-16 md:h-20 z-10 px-2 lg:px-0 py-2 md:py-4 m-0 ${className}`}
            >
                <div className="section flex justify-end px-1 md:px-8 h-full py-2">
                    <a
                        className="h-full "
                        onClick={() => history.push(HomePath)}
                    >
                        <div
                            // onClick={onClickBurguer}
                            className="flex h-full cursor-pointer "
                        >
                            <LogoIconSVG color={logoColor} />
                        </div>
                    </a>
                    <div className="flex-1">{middleSection}</div>
                    <div className="space-x-5 flex h-full items-center p-0 m-0 ">
                        {rightSection}
                    </div>
                </div>
            </Header>
        </React.Fragment>
    )
}

export default GenericNavBar
