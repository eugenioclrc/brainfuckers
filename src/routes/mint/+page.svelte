<script lang="ts">
	import { modal } from '$lib/store';
	import { account, loadReady } from '$lib/store';
	import {allowance, fuckBalance, approve, mint} from "$lib/contracts"
	import { formatEther, parseEther } from 'viem'

	let lockFuck = 0;


	let approving = false;
	async function doApprove() {
		approving = true;
		try {
			await approve(parseEther(String(lockFuck)));
		} catch(err) {
			alert("error approving");
		}
		approving = false;
	}

	let minting = false;
	async function doMint() {
		minting = true;
		try {
			await mint(parseEther(String(lockFuck / 10)));
		} catch(err) {
			console.log(err)
			alert("error minting");
		}
		minting = false;
	}
</script>

<!--
			{#if !$loadReady}
			{:else if !$account}
				<p>First connect your wallet</p>
				<button
					on:click={() => {
						$modal.open();
					}}
					class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>Connect</button
				>
			{:else}
				{#if userOnMerkle && canClaim}
					<span class="text-xl font-bold">
						Congratulations, you are in the merkle tree and can mint without mining:
					</span><br />
				{/if}

				-->
<main id="content" class="homepage container">
	<section class="hero">
		{#if !$account}
		<div class="hook">
			<h1>First connect your wallet</h1>
		</div>
		{:else}
		<div class="hook">
			<h1>Mint <mark>$BFUCKS</mark></h1>
			<!--
			<div class="grid ctas">
				<a role="button" href="/docs">Mint<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g><path class="line" d="M0 12H14"></path></svg></a>
				<a role="button" class="contrast" href="/examples">Redeem<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g><path class="line" d="M0 12H14"></path></svg></a>
			</div>
		-->
		</div>
		<div>
			<article class="component" aria-label="Demo">
				<form aria-busy="false" class="">
					<input name="input-demo" tabindex="-1" step="10" max={Number(Number(formatEther($fuckBalance)).toFixed(4))} placeholder="Amount of $FUCK to lock" bind:value={lockFuck} type="number"
					aria-invalid={Number(formatEther($fuckBalance)).toFixed(4) <= lockFuck}
					 /><!-- aria-invalid="false" -->
					<!--<small class="fade-in">Please enter a valid amount!</small>-->
					{#if $allowance < parseEther(String(lockFuck))}
						{#if !approving}
							<button on:click|preventDefault={doApprove}>Approve {lockFuck} $FUCK</button>
						{:else}
							Approving, Please wait...
						{/if}
					{:else}
						{#if !minting}
							<button on:click|preventDefault={doMint}>Mint {Number((lockFuck / 10).toFixed(2))} $BFUCK</button>
						{:else}
							Minting, Please wait...
						{/if}
					{/if}
				</form>
				<small>Your $FUCK balance: ${Number(Number(formatEther($fuckBalance)).toFixed(4))}</small>
			</article>
		</div>
		{/if}
	</section>
	</main>