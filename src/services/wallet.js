export const setupNetwork = async () => {
    const ethereum = window.ethereum

    if (ethereum) {
        const chainId = parseInt(process.env.REACT_APP_CHAIN_ID_NETWORK, 10)
        console.log({ chainId })
        try {
            // await ethereum.request({
            //     method: 'wallet_addEthereumChain',
            //     params: [
            //         {
            //             chainId: `0x${chainId.toString(16)}`,
            //             chainName: 'Rinkeby Test Network',
            //             // chainName: 'Polygon Network',
            //             nativeCurrency: {
            //                 name: 'ETH',
            //                 symbol: 'ETH',
            //                 decimals: 18,
            //             },
            //             // rpcUrls: ['https://polygon-rpc.com/'],
            //             // blockExplorerUrls: ['https://polygonscan.com/'],
            //             rpcUrls: ['https://rinkeby.infura.io/v3/'],
            //             blockExplorerUrls: ['https://rinkeby.etherscan.io'],
            //         },
            //     ],
            // })
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: `0x${chainId.toString(16)}`,
                        chainName: 'Ethereum Mainnet',
                        // chainName: 'Polygon Network',
                        // nativeCurrency: {
                        //     name: 'ETH',
                        //     symbol: 'ETH',
                        //     decimals: 18,
                        // },
                        // rpcUrls: ['https://polygon-rpc.com/'],
                        // blockExplorerUrls: ['https://polygonscan.com/'],
                        rpcUrls: ['https://mainnet.infura.io/v3/'],
                        // blockExplorerUrls: ['https://etherscan.io'],
                    },
                ],
            })
            return true
        } catch (error) {
            console.error('Failed to setup the network in Metamask:', error)
            return false
        }
    } else {
        console.error(
            "Can't setup the Polygon network on metamask because window.ethereum is undefined"
        )
        return false
    }
}

export const registerToken = async () => {
    const tokenAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: process.env.REACT_APP_LAND_DESTINARE_CONTRACT_ADDRESS,
                symbol: 'NLD',
                decimals: 0,
                // image: `${BASE_URL}/images/tokens/${tokenAddress}.png`,
            },
        },
    })

    return tokenAdded
}
