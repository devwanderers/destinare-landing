import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import globalTypes from './globalTypes'
import auth from './auth'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const key = 'destinareLandingRoot'

const persistConfig = {
    key,
    storage,
    whitelist: ['auth'],
    stateReconciler: autoMergeLevel2,
}

const appReducer = combineReducers({
    auth,
})

const rootReducer = (state, action) => {
    if (
        action.type === globalTypes.LOG_OUT ||
        (action.type.includes('rejected') &&
            action?.payload?.message === 'TokenExpired')
    ) {
        storage.removeItem(`persist:${key}`)
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
