import { createAsyncThunk } from '@reduxjs/toolkit'
import * as types from './types'
import axiosInstance from './../../services/axiosConfig'

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
            const result = await axiosInstance.post('auth/signup', {
                firstName: user?.firstName ?? '',
                lastName: user?.lastName ?? '',
                email: user.email,
                username: user.username,
                password: user.password,
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
