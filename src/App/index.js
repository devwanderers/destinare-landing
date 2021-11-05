import React from 'react'
import Router from '../Router'
import SessionManager from './SessionManager'

import '../styles/App.less'

const App = () => {
    // const [isDarkMode, setIsDarkMode] = React.useState()
    // const { switcher, currentTheme, status, themes } = useThemeSwitcher()

    // const toggleTheme = (isChecked) => {
    //     setIsDarkMode(isChecked)
    //     switcher({ theme: isChecked ? themes.dark : themes.light })
    // }

    // Avoid theme change flicker
    // const handleClick = () => {}

    return (
        <React.Fragment>
            <SessionManager />
            <Router />
        </React.Fragment>
    )
}

export default App
