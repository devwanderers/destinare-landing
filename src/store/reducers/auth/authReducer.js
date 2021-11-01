import { createReducer } from '@reduxjs/toolkit'
import { authenticateUser } from './actions'

const initialState = { auth: false, userData: { mail: '' } }

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(authenticateUser, (state, { payload }) => ({
        ...state,
        auth: true,
        userData: { ...state.userData, user: payload?.emailOrUsername },
    }))
})

export default authReducer
