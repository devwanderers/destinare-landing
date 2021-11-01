import { createAction } from '@reduxjs/toolkit'
import authTypes from './types'

export const authenticateUser = createAction(authTypes.USER_AUTH)
