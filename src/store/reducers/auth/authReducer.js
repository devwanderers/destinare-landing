import { createReducer } from '@reduxjs/toolkit'
import { signIn } from './actions'

const initialState = {
    auth: false,
    accessToken: null,
    userData: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        verified: '',
    },
    lastLoggin: null,
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        signIn.fulfilled,
        (state, { payload: { accessToken, user } }) => ({
            ...state,
            auth: true,
            accessToken: accessToken,
            userData: user,
            lastLoggin: new Date(),
        })
    )
})

export default authReducer
