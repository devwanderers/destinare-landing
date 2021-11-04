import { createAction } from '@reduxjs/toolkit'
import globalTypes from './globalTypes'

export const logout = createAction(globalTypes.LOG_OUT)
