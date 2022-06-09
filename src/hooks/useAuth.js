import { useCallback } from 'react'
import { UnsupportedChainIdError } from '@web3-react/core'
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { injected } from './../wallet/connectors'
import { setupNetwork } from './../services/wallet'
import useActiveWeb3React from './useActiveWeb3React'

const useAuth = () => {
    const { chainId, activate, deactivate } = useActiveWeb3React()

    const login = useCallback(
        (msg) => {
            activate(injected, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    console.log(error)
                    const hasSetup = await setupNetwork()
                    if (hasSetup) {
                        activate(injected).then(() => {})
                    }
                } else {
                    if (error instanceof NoEthereumProviderError) {
                        console.log(error)
                    } else if (
                        error instanceof UserRejectedRequestErrorInjected
                    ) {
                        console.log(error)
                    }
                }
            })
        },
        [activate]
    )

    const logout = useCallback(() => {
        deactivate()
    }, [deactivate, chainId])

    return { login, logout }
}

export default useAuth
