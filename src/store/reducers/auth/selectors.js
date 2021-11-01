import { createSelector } from 'reselect'

export const authReducerSelector = createSelector(
    (state) => state.auth,
    (authReducer) => authReducer
)

export const authenticatedSelector = createSelector(
    authReducerSelector,
    (authReducer) => authReducer.auth
)

export const userDataSelector = createSelector(
    authReducerSelector,
    (authReducer) => authReducer.userData
)
