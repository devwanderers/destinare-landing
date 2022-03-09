import React from 'react'
// import { Layout } from 'antd'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'
import LogoIconSVG from './../../assets/svg/brand/LogoIconSVG'

// const { Header } = Layout

const GenericNavBar = ({
    className = '',
    middleSection,
    rightSection,
    logoColor = '#fff',
}) => {
    const history = useHistory()
    return (
        <React.Fragment>
            <header
                className={`h-16 md:h-20 z-10 px-2 lg:px-3 xl:px-6 2xl:px-0  m-0 shadow-2xl py-2 ${className}`}
            >
                <div className="max-w-1800px mx-auto flex px-1 h-full">
                    <a
                        className="h-10 my-auto"
                        onClick={() => history.push(HomePath)}
                    >
                        <div
                            // onClick={onClickBurguer}
                            className="flex h-full cursor-pointer "
                        >
                            <LogoIconSVG color={logoColor} />
                        </div>
                    </a>
                    <div className="flex-1 flex h-full items-center p-0 m-0">
                        {rightSection}
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default GenericNavBar
