<script>
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Sun, Moon } from 'lucide-svelte';

	import { toggleMode } from 'mode-watcher';
</script>

<div class="container flex flex-col items-center">
	<div class="grid grid-cols-3 gap-[1rem]">
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 border-white border-opacity-10"
		>
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
		<div
			class="col-span-1 flex flex-col items-center justify-center border border-1 border-white border-opacity-10"
		>
			<Accordion.Root>
				<Accordion.Item value="item-1">
					<Accordion.Trigger>What Is This?</Accordion.Trigger>
					<Accordion.Content>This is my portfolio site.</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>Do You Collect All Your Websites Here?</Accordion.Trigger>
					<Accordion.Content>Yes.</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Is It Cool AF?</Accordion.Trigger>
					<Accordion.Content>Yes.</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	</div>

	<h1 class="font-display font-thin text-[10rem] uppercase">Missingweb</h1>
	<h2 class="font-serif text-[2rem]">Sphinx of black quartz, judge my vow.</h2>
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
