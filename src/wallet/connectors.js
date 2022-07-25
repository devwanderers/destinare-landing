import { InjectedConnector } from '@web3-react/injected-connector'
import { supportedChainIds } from './../constants/chainNetworks'

export const injected = new InjectedConnector({
    supportedChainIds,
})
