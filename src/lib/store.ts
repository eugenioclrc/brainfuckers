import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'


import { arbitrum, sepolia } from "viem/chains";

import { reconnect } from '@wagmi/core'
import { watchAccount, watchChainId, getAccount } from '@wagmi/core'

import { writable, derived } from "svelte/store";

const projectId = "6194";


// export const provider = writable();

export const modal = writable();
export const config = writable();
export const loadReady = writable(false);

export const account = writable();

export function initWeb3() {
  // 2. Create wagmiConfig
  const metadata = {
    name: 'Brainfuckers404',
    description: 'Brainfuckers404',
    url: 'https://brainfuckers.vercel.app/',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const _config = defaultWagmiConfig({
    chains: [arbitrum], // required
    projectId, // required
    metadata, // required
    ssr:false,
    // transports: ['http', 'ws'], // Optional - defaults to ['http', 'ws']
    // ...wagmiOptions // Optional - Override createConfig parameters
  })
  
  // 3. Create modal
  const _modal = createWeb3Modal({
    wagmiConfig: _config,
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
  });

  _modal.subscribeState(stateData => {
    // lets set the ready after we have the selected network
    loadReady.set(true);
    
    const dataAccount  = getAccount(_config);
    if (dataAccount && dataAccount.address) {
      account.set(dataAccount.address);
    }
  });

  reconnect(_config);
  
  modal.set(_modal);
  config.set(_config);
}

export const chainId = derived(modal, $modal => {
  if(!$modal) return 0;
  try { 
    return $modal.getState().selectedNetworkId;
  } catch (e) {
    return 0;
  }
});