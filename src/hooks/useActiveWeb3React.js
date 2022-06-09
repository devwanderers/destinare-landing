import { useEffect, useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { genericProvider } from '../services/providers'

const useActiveWeb3React = () => {
    const { library, chainId, ...web3React } = useWeb3React()
    const refEth = useRef(library)
    const [provider, setProvider] = useState(library || genericProvider)

    useEffect(() => {
        if (library !== refEth.current) {
            setProvider(library ?? genericProvider)
            refEth.current = library
        }
    }, [library])
    return {
        library: provider,
        chainId: chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID, 10),
        ...web3React,
    }
}

export default useActiveWeb3React
