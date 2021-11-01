import React from 'react'
import { Button } from 'antd'
import GenericNavBar from './GenericNavbar'
import { useHistory } from 'react-router'
import { LoginInPath } from '../../constants/routerConstants'
// import { SignInPath } from './../../constants/routerConstants'

const DefaultNavbar = (props) => {
    const history = useHistory()
    return (
        <GenericNavBar
            {...props}
            rightSection={
                <React.Fragment>
                    <Button
                        type="link"
                        className="h-full flex-1 btn tracking-wide text-xs lg:text-lg leading-none text-white font-light hover:text-white active:text-white focus:text-white"
                    >
                        <span>ABOUT US</span>
                    </Button>
                    <Button
                        type="primary"
                        className="gradient-g focus:bg-red-300 focus:ring-2 ring-red-300 text-lg lg:text-xl leading-none h-full px-8 lg:px-10 tracking-wide rounded-none border-none p-0 m-0"
                        onClick={() => history.push(LoginInPath)}
                    >
                        Log In
                    </Button>
                </React.Fragment>
            }
        />
    )
}

export default DefaultNavbar
