<script>
	import { Button } from "$lib/";
	import { Sun, Moon } from "lucide-svelte";
  
	import { toggleMode } from "mode-watcher";
</script>
  
  <Button on:click={toggleMode} variant="outline" size="icon">
	<Sun
	  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
	  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
  </Button>
  
  

<div class="container flex flex-col items-center">
	<h1 class="font-display font-thin text-[10rem] uppercase">Missingweb</h1>
	<h2 class="font-serif font-thin text-[2rem]">Sphinx of black quartz, judge my vow.</h2>
	<p class="text-[0.8rem]">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
