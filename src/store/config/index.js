import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore } from 'redux-persist'

import rootReducers from '../reducers'

const configureStore = () => {
    const middlewares = [thunkMiddleware]

    const composeEnhancers =
        (typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose
    // const persistedState

    const store = createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(...middlewares))
    )

    const persistor = persistStore(store)

    return { store, persistor }
}

export default configureStore
