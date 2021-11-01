import React from 'react'
import { Button } from 'antd'
import GenericNavBar from './GenericNavbar'

const NoAuthNavBar = (props) => {
    return (
        <GenericNavBar
            {...props}
            rightSection={
                <React.Fragment>
                    <Button
                        type="link"
                        className="h-full flex-1 btn tracking-wide text-xs lg:text-lg leading-none text-black-1 font-light hover:text-black-1 active:text-black-1 focus:text-black-1"
                    >
                        <span>ABOUT US</span>
                    </Button>
                </React.Fragment>
            }
        />
    )
}

export default NoAuthNavBar
