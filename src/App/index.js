import React from 'react'
import Router from '../Router'

import '../styles/App.less'
import WaitingContactModal from '../components/Modals/WaitingContactModal'
import useSession from './../hooks/useSession'

const App = () => {
    // const [isDarkMode, setIsDarkMode] = React.useState()
    // const { switcher, currentTheme, status, themes } = useThemeSwitcher()

    // const toggleTheme = (isChecked) => {
    //     setIsDarkMode(isChecked)
    //     switcher({ theme: isChecked ? themes.dark : themes.light })
    // }

    // Avoid theme change flicker
    // const handleClick = () => {}
    useSession()

    return (
        <React.Fragment>
            <WaitingContactModal />
            <Router />
        </React.Fragment>
    )
}

export default App
