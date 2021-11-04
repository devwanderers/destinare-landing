import { createReducer } from '@reduxjs/toolkit'
import { signIn } from './actions'

const initialState = { auth: false, accessToken: null, userData: { mail: '' } }

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        signIn.fulfilled,
        (state, { payload: { accessToken } }) => ({
            ...state,
            auth: true,
            accessToken: accessToken,
        })
    )
})

export default authReducer
