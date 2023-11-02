<script>
</script>

<div class="container center">
	{#each { length: 100 } as i}
		<h1 class=" font-display font-black text-[10rem] uppercase">Hello world!</h1>
		<h1>Hello world!</h1>
		<h1 class="font-serif">Hello world!</h1>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
