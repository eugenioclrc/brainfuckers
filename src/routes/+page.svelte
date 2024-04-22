<script lang="ts">
	import { modal } from '$lib/store';
	import { account, loadReady } from '$lib/store';

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
		<div class="hook">
			<h1><mark>A Minimal Frontend</mark> <br>for Mint and Burn <strong>$BFUCKERS</strong></h1>
			<p class="secondary">
				This is minimalist and lightweight frontend<br />for mint or reedem/burn <strong>$BFUCKERS</strong>
			</p>
			
			<div class="grid ctas">
				<a role="button" href="/mint">Mint<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g><path class="line" d="M0 12H14"></path></svg></a>
				<a role="button" class="contrast" href="/redeem">Redeem<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g><path class="line" d="M0 12H14"></path></svg></a>
			</div>
		</div>
		</section>
		<!--
		<section class="stats"><ul><li><p class="count"><strong>12.1K</strong></p><p class="label"><a href="https://github.com/picocss/pico" class="secondary" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-star"><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>GitHub Stars</a></p></li><li><p class="count"><strong>74.1K</strong></p><p class="label"><a href="https://www.npmjs.com/package/@picocss/pico" class="secondary" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-terminal"><path d="M8 9l3 3l-3 3"></path><path d="M13 15l3 0"></path><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path></svg><span class="period-prefix">Monthly </span>Npm Downloads</a></p><p class="period-suffix">(Last month)</p></li><li><p class="count"><strong>3.2M</strong></p><p class="label"><a href="https://www.jsdelivr.com/package/npm/@picocss/pico" class="secondary" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-cloud-download"><path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path><path d="M12 13l0 9"></path><path d="M9 19l3 3l3 -3"></path></svg><span class="period-prefix">Monthly </span>JSDelivr Requests</a></p><p class="period-suffix">(Last month)</p></li></ul></section>
	-->
		<section class="features"><hgroup><h2>A ERC404 implementation that takes and gives $FUCK</h2>
			<p>
Our collection is a tribute to the quirky and experimental world of 
<a href="https://arbiscan.io/address/0xe38d8f2a1787f4d9ec0a671f4d39f7788fd3b235" target="_blank">$FUCK token</a>. The Brainfuckers 
are ERC404 is an implementation of a co-joined ERC20 and ERC721 pair inspired by the $FUCK token. If you're unfamiliar, $FUCK is a token coded in Brainfuck, Brainfuck is an 
esoteric programming language known for its minimalistic design, using only eight characters for commands.
</p></hgroup>
<div class="grid">
	<article>
		<h3>Minting NFTs</h3>
		<p>
			To mint a Brainfucker NFT, you'll need to use the contract to lock 10 ERC20
			$FUCK tokens. Once locked, you'll receive your unique Brainfucker NFT along 
			with 1 $BFUCK token.<br />
		</p>
		<p><a href="/docs/classless">Mint<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g><path class="line" d="M0 12H14"></path></svg></a>
		</p>
	</article>
	<article>
		<h3>Recovery $FUCK</h3>
		<p>If you ever want to recover your $FUCK tokens, you can simply burn your $BFUCK 
			tokens. For each $BFUCK burned, you'll receive 10 $FUCK tokens back, maintaining an
			 inverse ratio.</p>
		<p>
			<a href="/docs">Burn $BFUCK<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><g class="head"><path d="M10 16L14 12"></path><path d="M10 8L14 12"></path></g><path class="line" d="M0 12H14"></path></svg></a>
		</p>
		</article>
	</div>
	</section></main>