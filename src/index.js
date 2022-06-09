import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import App from './App'
import reportWebVitals from './reportWebVitals'
import configureStore from './store/config/index'

const store = configureStore()

function getLibrary(provider) {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = 12000

    return library
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <App />
                </Web3ReactProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
