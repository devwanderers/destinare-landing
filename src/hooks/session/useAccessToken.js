import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { tokenSelector } from '../../store/reducers/auth/selectors'
import axiosInstance from './../../store/services/axiosConfig'

const useAccessToken = () => {
    const clientToken = useSelector(tokenSelector)

    useEffect(() => {
        if (clientToken) {
            axiosInstance.defaults.headers.common['x-access-token'] =
                clientToken
        } else {
            delete axiosInstance.defaults.headers.common['x-access-token']
        }
    }, [clientToken])
}

export default useAccessToken
