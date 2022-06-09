import { ethers } from 'ethers'
import { useMemo } from 'react'
import useActiveWeb3React from './../useActiveWeb3React'
import nftAbi from '../../abi/nftAbi.json'
import { genericProvider } from './../../services/providers'

const getContract = (abi, address, signer) => {
    const signerOrProvider = signer ?? genericProvider
    return new ethers.Contract(address, abi, signerOrProvider)
}

const getERC721Contract = (address, signer) => {
    return getContract(nftAbi, address, signer)
}

export const useERC721Contract = (address) => {
    const { library, account } = useActiveWeb3React()
    return useMemo(
        () => getERC721Contract(address, library.getSigner()),
        [address, library, account]
    )
}
