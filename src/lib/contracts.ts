import { config, chainId, account } from './store';
import { readContract, writeContract, multicall, watchContractEvent } from '@wagmi/core';

import { parseAbi } from 'viem'

import { writable, get } from 'svelte/store';

export const FUCK = '0xe38D8f2A1787F4d9EC0a671F4d39F7788fd3b235';
export const BFUCK = '0xEdaD06525b01D4310ac7Da8610803d6eA512eD72';

const abi404 = parseAbi([
    //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
    'function mint(address to, uint256 amountOut) external',
    'function approve(address spender, uint256 amount) external returns (bool)',
    'function balanceOf(address user) view returns (uint256)',
    'function allowance(address owner, address spender) public view returns (uint256 remaining)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)'
]);

const abi20 = parseAbi([
    //  ^? const abi: readonly [{ name: "balanceOf"; type: "function"; stateMutability:...
    'function approve(address spender, uint256 amount) external returns (bool)',
    'function balanceOf(address user) view returns (uint256)',
    'function allowance(address owner, address spender) public view returns (uint256 remaining)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)'
]);


export async function ownerOf(id) {
    const data = await readContract(get(config), {
        address: BFUCK,
        abi: abi404,
        functionName: 'ownerOf',
        args: [id],
        blockTag: 'safe',
    });

    return data;
}

export async function approve(amount) {
    const data = await writeContract(get(config), {
        address: FUCK,
        abi: abi20,
        functionName: 'approve',
        args: [BFUCK, amount],
    });

    // a bit ugly... i know
    const toWatch = {
        contracts: [
            { address: FUCK, abi: abi20, functionName: 'allowance', args: [get(account), BFUCK] },
        ],
    };
    const data2 = await multicall(get(config), toWatch);
    allowance.set(data2[0].result);

    return data;
}


export async function mint(amountFuckIn) {
    const data = await writeContract(get(config), {
        address: BFUCK,
        abi: abi404,
        functionName: 'mint',
        args: [get(account), amountFuckIn],
    });

    return data;
}

export const allowance = writable(0n);
export const fuckBalance = writable(0n);
export const bfuckBalance = writable(0n);

export async function getAllowanceAndBalances() {
    const user = get(account);
    const _config = get(config);

    const toWatch = {
        contracts: [
            { address: FUCK, abi: abi20, functionName: 'allowance', args: [user, BFUCK] },
            { address: FUCK, abi: abi20, functionName: 'balanceOf', args: [user] },
            { address: BFUCK, abi: abi404, functionName: 'balanceOf', args: [user] },
        ],
    };
    //console.log(_config.getClient());
    const data = await multicall(_config, toWatch);
    allowance.set(data[0].result);
    fuckBalance.set(data[1].result);
    bfuckBalance.set(data[2].result);

    
    const unwatch = watchContractEvent(_config, {        
        address: FUCK,
        abi: abi20,
        chainId: get(chainId),
        eventName: 'Approve',
        async onLogs(logs) {
            const data = await multicall(_config, toWatch);
            allowance.set(data[0].result);
            fuckBalance.set(data[1].result);
            bfuckBalance.set(data[2].result);
        },
    });
    
    return unwatch;
}