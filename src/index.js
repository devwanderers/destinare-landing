import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
// import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import reportWebVitals from './reportWebVitals'
import configureStore from './store/config/index'

const store = configureStore()

// const themes = {
//     dark: `${process.env.PUBLIC_URL}/themes/dark-theme.css`,
//     light: `${process.env.PUBLIC_URL}/themes/light-theme.css`,
// }

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                {/* <ThemeSwitcherProvider themeMap={themes} defaultTheme="light"> */}
                <App />
                {/* </ThemeSwitcherProvider> */}
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
