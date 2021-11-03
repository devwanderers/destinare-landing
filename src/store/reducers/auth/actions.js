import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import UUID from 'uuid-int'

import { returnPromise } from '../../../services/promises'
import * as types from './types'
import axiosInstance from './../../services/axiosConfig'

export const authenticateUser = createAction(types.USER_AUTH)

export const sendUserData = createAsyncThunk(
    types.SENDUSER_DATA,
    async (user, { dispatch }) => {
        const id = 0

        const generator = UUID(id)
        const uuid = generator.uuid()
        const result = axiosInstance.post('user/send/data', {
            userId: uuid,
            firstName: user?.firstName ? user?.firstName : '',
            lastName: user?.lastName ? user?.lastName : '',
            email: user.email,
        })
        return result
    }
)

export const signUp = createAsyncThunk(
    types.SIGN_UP,
    async (datos, { dispatch }) => {
        const result = await returnPromise(async (resolve, rejected) => {
            try {
                resolve('Success')
            } catch (error) {
                console.log(error)
                rejected('Rejected')
            }
        })
        return result
    }
)
