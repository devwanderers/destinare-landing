import { createReducer } from '@reduxjs/toolkit'
import { sendMail, signIn, setModalShowed } from './actions'

const initialState = {
    auth: false,
    accessToken: null,
    userData: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        verified: '',
        country: '',
        language: '',
        walletAddress: '',
        mailSent: false,
    },
    modals: {
        contact: false,
    },
    lastLoggin: null,
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setModalShowed, (state, { payload }) => ({
            ...state,
            modals: { ...state.modals, [payload]: true },
        }))
        .addCase(
            signIn.fulfilled,
            (state, { payload: { accessToken, user } }) => ({
                ...state,
                auth: true,
                accessToken: accessToken,
                userData: user,
                lastLoggin: new Date(),
            })
        )
        .addCase(sendMail.fulfilled, (state) => ({
            ...state,
            userData: {
                ...state.userData,
                mailSent: true,
            },
        }))
})

export default authReducer
