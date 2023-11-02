<script>
</script>

<div class="container">
	{#each { length: 1000 } as i}
		<h1 class=" font-display font-black font-">Hello world!</h1>
		<h1>Hello world!</h1>
		<h1 class="font-serif">Hello world!</h1>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
