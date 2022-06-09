import { useCallback, useEffect } from 'react'
import useActiveWeb3React from './../useActiveWeb3React'
import { _useResolveCall } from './../utils/_useResolveCall'
import { useERC721Contract } from './useContract'
import { NFT_ADDRESS_GENESIS } from '../../constants/addressConstants'

export const useGetUserBalance = () => {
    const { account, library } = useActiveWeb3React()

    const erc721Contract = useERC721Contract(NFT_ADDRESS_GENESIS)

    const fetchTotalSupply = useCallback(async () => {
        try {
            if (account) {
                const balance = await erc721Contract.balanceOf(account)

                return parseInt(Number(balance))
            }
        } catch (error) {
            console.log(error)
        }
    }, [erc721Contract, account])

    const { fetch, ...rest } = _useResolveCall(fetchTotalSupply, null, {})

    useEffect(() => {
        fetch()
    }, [fetch, library])

    return { reload: fetch, ...rest }
}
