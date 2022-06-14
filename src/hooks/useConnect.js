import { useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'

const useConnect = () => {
    const { account, library } = useWeb3React()

    useEffect(() => {
        if (account && library) {
            const { provider } = library

            const reload = () => {
                window.location.reload()
            }
            provider.on('chainChanged', reload)
            provider.on('accountsChanged', reload)

            return () => {
                provider.removeListener('chainChanged', reload)
                provider.removeListener('accountsChanged', reload)
            }
        }
        return undefined
    }, [account, library])
}

export default useConnect
