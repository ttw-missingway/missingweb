<script>
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Sun, Moon } from 'lucide-svelte';
	import { Terminal } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	import { toggleMode } from 'mode-watcher';
</script>

<div class="container flex flex-col">
	<div class="mb-[3rem] max-w-[30rem]">
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

	<div class="grid grid-cols-3 gap-[1rem]">
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-30"
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
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-30"
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
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Alert.Root>
				<Terminal class="h-4 w-4" />
				<Alert.Title>Heads up!</Alert.Title>
				<Alert.Description>You can add components to your app using the cli.</Alert.Description>
			</Alert.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<AlertDialog.Root>
				<AlertDialog.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline">Show Dialog</Button>
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Header>
						<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
						<AlertDialog.Description>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers.
						</AlertDialog.Description>
					</AlertDialog.Header>
					<AlertDialog.Footer>
						<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
						<AlertDialog.Action>Continue</AlertDialog.Action>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</div>
		<div
		class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
	>
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline">Show Dialog</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete your account and remove
						your data from our servers.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action>Continue</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>
	</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
