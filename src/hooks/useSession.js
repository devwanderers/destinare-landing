import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lastLogginSelector } from './../store/reducers/auth/selectors'
import * as actions from './../store/reducers/globalActions'
import useEffectOnce from './useEffectOnce'
import useInterval from './useInterval'

const useSession = (props) => {
    const lastLoggin = useSelector(lastLogginSelector)
    const dispatch = useDispatch()
    const logout = useCallback(() => dispatch(actions.logout()), [])

    const expiredSession = () => {
        if (lastLoggin) {
            const now = new Date()
            const _lastLoggin = new Date(lastLoggin)
            // const hour24 = 10 * 1000
            const hour24 = 24 * 60 * 60 * 1000

            if (now.getTime() - _lastLoggin.getTime() >= hour24) {
                logout()
            }
        }
    }

    useEffectOnce(() => expiredSession())
    useInterval(() => expiredSession(), lastLoggin ? 15 * 1000 : null)
}

export default useSession
