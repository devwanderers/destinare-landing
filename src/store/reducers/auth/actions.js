import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as types from './types'
import axiosInstance from './../../services/axiosConfig'
import { tokenSelector } from './selectors'

// export const sendUserData = createAsyncThunk(
//     types.SENDUSER_DATA,
//     async (user, { dispatch }) => {
//         const id = 0

//         const generator = UUID(id)
//         const uuid = generator.uuid()
//         const result = axiosInstance.post('user/send/data', {
//             userId: uuid,
//             firstName: user?.firstName ? user?.firstName : '',
//             lastName: user?.lastName ? user?.lastName : '',
//             email: user.email,
//         })
//         return result
//     }
// )
export const setModalShowed = createAction(types.MODAL_SHOWED)

export const sendMail = createAsyncThunk(
    types.SEND_MAIL,
    async (email, { rejectWithValue, getState }) => {
        try {
            const state = getState()
            const clientToken = tokenSelector(state)

            console.log({ clientToken })
            const response = await axiosInstance.post('auth/sendMail', {
                email,
            })
            console.log({ response })
            return response?.data
        } catch (error) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    }
)

export const signIn = createAsyncThunk(
    types.SIGN_IN,
    async (user, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('auth/signin', {
                email: user.email,
                password: user.password,
            })

            return response.data
        } catch (error) {
            if (!error.response) {
                throw error
            }

            console.log({ error })
            return rejectWithValue(error.response.data)
        }
    }
)

export const signUp = createAsyncThunk(
    types.SIGN_UP,
    async (user, { rejectWithValue }) => {
        try {
            console.log({ user })
            const result = await axiosInstance.post('auth/signup', {
                firstName: user?.firstName ?? '',
                lastName: user?.lastName ?? '',
                email: user.email,
                country: user.country,
                language: user.language,
                password: user.password,
                discordId: user.discordId,
                walletAddress: user.walletAddress,
            })

            return result.data
        } catch (error) {
            if (!error.response) {
                throw error
            }
            console.log({ error })
            return rejectWithValue(error.response.data)
        }
    }
)

export const claimComplimentary = createAsyncThunk(
    types.CLAIM_COMPLIMENTARY,
    async (payload, { rejectWithValue, getState }) => {
        try {
            const state = getState()
            const userData = state.auth.userData

            const response = await axiosInstance.post('auth/posttesting', {
                codeClaim: payload.codeClaim,
                destinationClaimKey: payload.destinationClaimKey,
                firstName: userData.firstName ?? '',
                lastName: userData.lastName ?? '',
                email: userData.email ?? '',
                countryCode: userData.country ?? '',
            })

            return response.data
        } catch (error) {
            if (!error.response) {
                throw error
            }

            console.log({ error })
            return rejectWithValue(error.response.data)
        }
    }
)
