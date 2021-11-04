import React from 'react'
import Iframe from 'react-iframe'

const TripvixiaIFrame = () => {
    return (
        <div className="flex-1">
            <Iframe
                url="https://members.tripvixia.com/membership/signup?invite=0e3cb515-2949-4e1a-bb83-fd7fe4a5b251&referraltype=3"
                width="100%"
                height="100%"
                // height="450px"
                id="travel"
                className="h-full"
                display="initial"
                position="relative"
                scrolling="yes"
            />
        </div>
    )
}
export default TripvixiaIFrame
