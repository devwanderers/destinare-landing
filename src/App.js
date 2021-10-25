import React from 'react'
// import NoAuthLayout from './components/Layouts/NoAuthLayout'
// import 'antd/dist'
import './styles/App.less'

// import { useThemeSwitcher } from 'react-css-theme-switcher'
// import { Button } from 'antd'
// import { UseEffectHook } from './hooks/UseEffectHook'
// import Router from './Router'
// import AuthLayout from './components/Layouts/AuthLayout'
import LandingPage from './views/LandingPage'

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
        <LandingPage />
        // {/* <NoAuthLayout>
        //     <Button>Test</Button>
        //     <h1>The current theme is: {currentTheme}</h1>
        //     <Switch checked={isDarkMode} onChange={toggleTheme} />
        //     <Input
        //         style={{ width: 300, marginTop: 30 }}
        //         placeholder="I will change with the theme!"
        //     />
        //     <UseEffectHook />
        //     <Router />
        // </NoAuthLayout> */}
    )
}

export default App
