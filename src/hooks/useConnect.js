import { useEffect, useState } from 'react'

import { useWeb3React } from '@web3-react/core'

const useConnect = () => {
    const [init, setInit] = useState(false)
    const { account, library } = useWeb3React()

    useEffect(() => {
        if (account && library && !init) {
            const { provider } = library

            setInit(true)
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
    }, [account, init, library])
}

export default useConnect
