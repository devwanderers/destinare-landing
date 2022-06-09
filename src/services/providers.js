import { ethers } from 'ethers'

export const genericProvider = new ethers.providers.StaticJsonRpcProvider(
    process.env.REACT_APP_INFURA_API_KEY
)
