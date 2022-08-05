import React from 'react'
import Router from '../Router'

import '../styles/App.less'
import WaitingContactModal from '../components/Modals/WaitingContactModal'
import useSession from './../hooks/session/useSession'
import useAccessToken from './../hooks/session/useAccessToken'
import useConnect from './../hooks/useConnect'
import TwitterConvTrkr from "react-twitter-conversion-tracker";

const App = () => {
    useConnect()
    useSession()
    useAccessToken()
    TwitterConvTrkr.init("o9ng0");
    TwitterConvTrkr.pageView();
    return (
        <div className="h-screen">
            <WaitingContactModal />
            <Router />
        </div>
    )
}

export default App
