export const setupNetwork = async () => {
    const ethereum = window.ethereum

    if (ethereum) {
        const chainId = parseInt(process.env.REACT_APP_CHAIN_ID_NETWORK, 10)
        try {
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
