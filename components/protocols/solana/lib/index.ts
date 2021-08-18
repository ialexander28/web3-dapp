// Solana
export enum SOLANA_NETWORKS {
    MAINNET = "MAINNET",
    DEVNET = "DEVNET"
  }
  
  export enum SOLANA_PROTOCOLS {
    RPC = "RPC",
    WS = "WS"
  }


// Helper for generating an account URL on Solana Explorer
export const getAccountExplorerURL = (address: string) => {
    return `https://explorer.solana.com/address/${address}?cluster=devnet`;
}

// Polkadot
export enum POLKADOT_NETWORKS {
  WESTEND = "WESTEND",
  MAINNET = "MAINNET"
}

export enum POLKADOT_PROTOCOLS {
  RPC = "RPC",
  WS = "WS",
}

// Helper for generating a transaction URL on Solana Explorer
export const getTxExplorerURL = (signature: string) => {
    return `https://explorer.solana.com/tx/${signature}?cluster=devnet`;
}

export const getSolanaUrl = (network: SOLANA_NETWORKS, protocol: SOLANA_PROTOCOLS): string => {
    if (network === SOLANA_NETWORKS.MAINNET) {
        return protocol === SOLANA_PROTOCOLS.RPC
            ?  `https://${process.env.DATAHUB_SOLANA_MAINNET_RPC_URL}/apikey/${process.env.DATAHUB_SOLANA_API_KEY}`
            :  `wss://${process.env.DATAHUB_SOLANA_MAINNET_WS_URL}/apikey/${process.env.DATAHUB_SOLANA_API_KEY}`
    } else {
        return protocol === SOLANA_PROTOCOLS.RPC
            ? `https://${process.env.DATAHUB_SOLANA_DEVNET_RPC_URL}/apikey/${process.env.DATAHUB_SOLANA_API_KEY}`
            : `wss://${process.env.DATAHUB_SOLANA_DEVNET_WS_URL}/apikey/${process.env.DATAHUB_SOLANA_API_KEY}`
    }
}


export const getSafeUrl = () => "https://api.testnet.solana.com" 