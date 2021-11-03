import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { returnPromise } from '../../../services/promises'
import * as types from './types'

export const authenticateUser = createAction(types.USER_AUTH)

const REGISTERED_DISCOUNTS_URL =
    'http://www.registereddiscounts.com/gb0214/sor_germinate/rob213523sQ3246tw%27.freeze'
const host = 'us-east-static-08.quotaguard.com'
const port = '92930'
const userName = '5bkvbocf5thl8c'
const password = '1q5vmxsk4h5lkuj5o8c8jiflmpuz'
const uniqueId = '8123481'
const userId = uniqueId + '0001'

export const sendUserData = createAsyncThunk(
    types.SENDUSER_DATA,
    async (user, { dispatch }) => {
        const result = await axios.post(
            REGISTERED_DISCOUNTS_URL,
            {
                ip_address: '54.161.96.109',
                user_id: parseInt(userId),
                email: user?.email,
                first_name: user?.firstName,
                last_name: user?.lastName,
                city: 'City',
                state: 'MI',
                postal_code: '49801',
                country_code: 'US',
            },
            { proxy: { host, port, auth: { userName, password } } }
        )
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
