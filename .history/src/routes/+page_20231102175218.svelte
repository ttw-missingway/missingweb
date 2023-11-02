<script>
	// @ts-nocheck

	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Sun, Moon } from 'lucide-svelte';
	import { Terminal } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { toggleMode } from 'mode-watcher';
	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';
	import * as ContextMenu from '$lib/components/ui/context-menu';
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { CalendarDays } from 'lucide-svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Separator } from '$lib/components/ui/separator';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Switch } from '$lib/components/ui/switch';
	import * as Table from "$lib/components/ui/table";
	import {
		Cloud,
		CreditCard,
		Github,
		Keyboard,
		LifeBuoy,
		LogOut,
		Mail,
		MessageSquare,
		Plus,
		PlusCircle,
		Settings,
		User,
		UserPlus,
		Users
	} from 'lucide-svelte';
	import * as Menubar from '$lib/components/ui/menubar';
	import { onMount } from 'svelte';
	import { Progress } from '$lib/components/ui/progress';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Slider } from '$lib/components/ui/slider';

	let numvalue = 13;
	onMount(() => {
		const timer = setTimeout(() => (numvalue = 66), 500);
		return () => clearTimeout(timer);
	});

	let bookmarks = false;
	let fullUrls = true;

	const profileRadioValue = 'benoit';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next.js',
			label: 'Next.js'
		},
		{
			value: 'nuxt.js',
			label: 'Nuxt.js'
		},
		{
			value: 'remix',
			label: 'Remix'
		},
		{
			value: 'astro',
			label: 'Astro'
		}
	];

	let open = false;
	let value = 'pedro';
	let showBookmarks = false;
	let showFullURLs = true;

	$: selectedValue = frameworks.find((f) => f.value === value)?.label ?? 'Select a framework...';

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	/**
	 * @param {string} triggerId
	 */
	function closeAndFocusTrigger(triggerId) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<div class="container flex flex-col">
	<div class="mb-[3rem] max-w-[30rem]">
		<h1 class="font-display font-thin text-[10rem] uppercase">Missingweb</h1>
		<h2 class="font-serif text-[2rem]">Sphinx of black quartz, judge my vow.</h2>
		<Separator class="my-4" />
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
				<div class="relative">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute top-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
				</div>
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
			<AspectRatio ratio={16 / 9} class="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					alt="Gray by Drew Beamer"
					class="rounded-md object-cover h-full w-full"
				/>
			</AspectRatio>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Badge>Badge</Badge>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Card.Root class="w-[350px]">
				<Card.Header>
					<Card.Title>Create project</Card.Title>
					<Card.Description>Deploy your new project in one-click.</Card.Description>
				</Card.Header>
				<Card.Content>
					<form>
						<div class="grid w-full items-center gap-4">
							<div class="flex flex-col space-y-1.5">
								<Label for="name">Name</Label>
								<Input id="name" placeholder="Name of your project" />
							</div>
							<div class="flex flex-col space-y-1.5">
								<Label for="framework">Framework</Label>
								<Select.Root>
									<Select.Trigger id="framework">
										<Select.Value placeholder="Select" />
									</Select.Trigger>
									<Select.Content>
										{#each frameworks as framework}
											<Select.Item value={framework.value} label={framework.label}
												>{framework.label}</Select.Item
											>
										{/each}
									</Select.Content>
								</Select.Root>
							</div>
						</div>
					</form>
				</Card.Content>
				<Card.Footer class="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Deploy</Button>
				</Card.Footer>
			</Card.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Collapsible.Root class="w-[350px] space-y-2">
				<div class="flex items-center justify-between space-x-4 px-4">
					<h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
					<Collapsible.Trigger asChild let:builder>
						<Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
							<ChevronsUpDown class="h-4 w-4" />
							<span class="sr-only">Toggle</span>
						</Button>
					</Collapsible.Trigger>
				</div>
				<div class="rounded-md border px-4 py-3 font-mono text-sm">@melt-ui/melt-ui</div>
				<Collapsible.Content class="space-y-2">
					<div class="rounded-md border px-4 py-3 font-mono text-sm">bits-ui</div>
					<div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
				</Collapsible.Content>
			</Collapsible.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Popover.Root bind:open let:ids>
				<Popover.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						class="w-[200px] justify-between"
					>
						{selectedValue}
						<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-[200px] p-0">
					<Command.Root>
						<Command.Input placeholder="Search framework..." />
						<Command.Empty>No framework found.</Command.Empty>
						<Command.Group>
							{#each frameworks as framework}
								<Command.Item
									value={framework.value}
									onSelect={(currentValue) => {
										value = currentValue;
										closeAndFocusTrigger(ids.trigger);
									}}
								>
									<Check
										class={cn('mr-2 h-4 w-4', value !== framework.value && 'text-transparent')}
									/>
									{framework.label}
								</Command.Item>
							{/each}
						</Command.Group>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<ContextMenu.Root>
				<ContextMenu.Trigger
					class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
				>
					Right click here
				</ContextMenu.Trigger>
				<ContextMenu.Content class="w-64">
					<ContextMenu.Item inset>
						Back
						<ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
					</ContextMenu.Item>
					<ContextMenu.Item inset>
						Forward
						<ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
					</ContextMenu.Item>
					<ContextMenu.Item inset>
						Reload
						<ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
					</ContextMenu.Item>
					<ContextMenu.Sub>
						<ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
						<ContextMenu.SubContent class="w-48">
							<ContextMenu.Item>
								Save Page As...
								<ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
							</ContextMenu.Item>
							<ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
							<ContextMenu.Item>Name Window...</ContextMenu.Item>
							<ContextMenu.Separator />
							<ContextMenu.Item>Developer Tools</ContextMenu.Item>
						</ContextMenu.SubContent>
					</ContextMenu.Sub>
					<ContextMenu.Separator />
					<ContextMenu.CheckboxItem bind:checked={showBookmarks}>
						Show Bookmarks Bar
						<ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
					</ContextMenu.CheckboxItem>
					<ContextMenu.CheckboxItem bind:checked={showFullURLs}>
						Show Full URLs
					</ContextMenu.CheckboxItem>
					<ContextMenu.Separator />
					<ContextMenu.RadioGroup bind:value>
						<ContextMenu.Label inset>People</ContextMenu.Label>
						<ContextMenu.Separator />
						<ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
						<ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
					</ContextMenu.RadioGroup>
				</ContextMenu.Content>
			</ContextMenu.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Dialog.Root>
				<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Edit Profile</Dialog.Trigger>
				<Dialog.Content class="sm:max-w-[425px]">
					<Dialog.Header>
						<Dialog.Title>Edit profile</Dialog.Title>
						<Dialog.Description>
							Make changes to your profile here. Click save when you're done.
						</Dialog.Description>
					</Dialog.Header>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Name</Label>
							<Input id="name" value="Pedro Duarte" class="col-span-3" />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label class="text-right">Username</Label>
							<Input id="username" value="@peduarte" class="col-span-3" />
						</div>
					</div>
					<Dialog.Footer>
						<Button type="submit">Save changes</Button>
					</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline">Open</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							<User class="mr-2 h-4 w-4" />
							<span>Profile</span>
							<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<CreditCard class="mr-2 h-4 w-4" />
							<span>Billing</span>
							<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Settings class="mr-2 h-4 w-4" />
							<span>Settings</span>
							<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Keyboard class="mr-2 h-4 w-4" />
							<span>Keyboard shortcuts</span>
							<DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							<Users class="mr-2 h-4 w-4" />
							<span>Team</span>
						</DropdownMenu.Item>
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>
								<UserPlus class="mr-2 h-4 w-4" />
								<span>Invite users</span>
							</DropdownMenu.SubTrigger>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>
									<Mail class="mr-2 h-4 w-4" />
									<span>Email</span>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<MessageSquare class="mr-2 h-4 w-4" />
									<span>Message</span>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<PlusCircle class="mr-2 h-4 w-4" />
									<span>More...</span>
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Sub>
						<DropdownMenu.Item>
							<Plus class="mr-2 h-4 w-4" />
							<span>New Team</span>
							<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<Github class="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<LifeBuoy class="mr-2 h-4 w-4" />
						<span>Support</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Cloud class="mr-2 h-4 w-4" />
						<span>API</span>
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<LogOut class="mr-2 h-4 w-4" />
						<span>Log out</span>
						<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<HoverCard.Root>
				<HoverCard.Trigger
					href="https://github.com/sveltejs"
					target="_blank"
					rel="noreferrer noopener"
					class="hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				>
					@sveltejs
				</HoverCard.Trigger>
				<HoverCard.Content class="w-80">
					<div class="flex justify-between space-x-4">
						<Avatar.Root>
							<Avatar.Image src="https://github.com/sveltejs.png" />
							<Avatar.Fallback>SK</Avatar.Fallback>
						</Avatar.Root>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold">@sveltejs</h4>
							<p class="text-sm">Cybernetically enhanced web apps.</p>
							<div class="flex items-center pt-2">
								<CalendarDays class="mr-2 h-4 w-4 opacity-70" />{' '}
								<span class="text-xs text-muted-foreground"> Joined September 2022 </span>
							</div>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Menubar.Root>
				<Menubar.Menu>
					<Menubar.Trigger>File</Menubar.Trigger>
					<Menubar.Content>
						<Menubar.Item>
							New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
						</Menubar.Item>
						<Menubar.Item>
							New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
						</Menubar.Item>
						<Menubar.Item>New Incognito Window</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Sub>
							<Menubar.SubTrigger>Share</Menubar.SubTrigger>
							<Menubar.SubContent>
								<Menubar.Item>Email link</Menubar.Item>
								<Menubar.Item>Messages</Menubar.Item>
								<Menubar.Item>Notes</Menubar.Item>
							</Menubar.SubContent>
						</Menubar.Sub>
						<Menubar.Separator />
						<Menubar.Item>
							Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
				<Menubar.Menu>
					<Menubar.Trigger>Edit</Menubar.Trigger>
					<Menubar.Content>
						<Menubar.Item>
							Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
						</Menubar.Item>
						<Menubar.Item>
							Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
						</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Sub>
							<Menubar.SubTrigger>Find</Menubar.SubTrigger>
							<Menubar.SubContent>
								<Menubar.Item>Search the web</Menubar.Item>
								<Menubar.Separator />
								<Menubar.Item>Find...</Menubar.Item>
								<Menubar.Item>Find Next</Menubar.Item>
								<Menubar.Item>Find Previous</Menubar.Item>
							</Menubar.SubContent>
						</Menubar.Sub>
						<Menubar.Separator />
						<Menubar.Item>Cut</Menubar.Item>
						<Menubar.Item>Copy</Menubar.Item>
						<Menubar.Item>Paste</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
				<Menubar.Menu>
					<Menubar.Trigger>View</Menubar.Trigger>
					<Menubar.Content>
						<Menubar.CheckboxItem bind:checked={bookmarks}
							>Always Show Bookmarks Bar</Menubar.CheckboxItem
						>
						<Menubar.CheckboxItem bind:checked={fullUrls}>
							Always Show Full URLs
						</Menubar.CheckboxItem>
						<Menubar.Separator />
						<Menubar.Item inset>
							Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
						</Menubar.Item>
						<Menubar.Item inset>
							Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
						</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item inset>Hide Sidebar</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
				<Menubar.Menu>
					<Menubar.Trigger>Profiles</Menubar.Trigger>
					<Menubar.Content>
						<Menubar.RadioGroup value={profileRadioValue}>
							<Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
							<Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
							<Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
						</Menubar.RadioGroup>
						<Menubar.Separator />
						<Menubar.Item inset>Edit...</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item inset>Add Profile...</Menubar.Item>
					</Menubar.Content>
				</Menubar.Menu>
			</Menubar.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Progress {numvalue} max={100} class="w-[60%]" />
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<RadioGroup.Root value="comfortable">
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="default" id="r1" />
					<Label for="r1">Default</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="comfortable" id="r2" />
					<Label for="r2">Comfortable</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="compact" id="r3" />
					<Label for="r3">Compact</Label>
				</div>
				<RadioGroup.Input name="spacing" />
			</RadioGroup.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline">Open</Button>
				</Sheet.Trigger>
				<Sheet.Content side="right">
					<Sheet.Header>
						<Sheet.Title>Edit profile</Sheet.Title>
						<Sheet.Description>
							Make changes to your profile here. Click save when you're done.
						</Sheet.Description>
					</Sheet.Header>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="name" class="text-right">Name</Label>
							<Input id="name" value="Pedro Duarte" class="col-span-3" />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="username" class="text-right">Username</Label>
							<Input id="username" value="@peduarte" class="col-span-3" />
						</div>
					</div>
					<Sheet.Footer>
						<Sheet.Close asChild let:builder>
							<Button builders={[builder]} type="submit">Save changes</Button>
						</Sheet.Close>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Skeleton class="w-[100px] h-[20px] rounded-full" />
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Slider value={[33]} max={100} step={1} />
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
			<Switch />
		</div>
		<div
			class="p-[1rem] col-span-1 flex flex-col items-center justify-center border border-1 dark:border-white border-black border-opacity-20"
		>
				
<Table.Root>
	<Table.Caption>A list of your recent invoices.</Table.Caption>
	<Table.Header>
	  <Table.Row>
		<Table.Head class="w-[100px]">Invoice</Table.Head>
		<Table.Head>Status</Table.Head>
		<Table.Head>Method</Table.Head>
		<Table.Head class="text-right">Amount</Table.Head>
	  </Table.Row>
	</Table.Header>
	<Table.Body>
	  <Table.Row>
		<Table.Cell class="font-medium">INV001</Table.Cell>
		<Table.Cell>Paid</Table.Cell>
		<Table.Cell>Credit Card</Table.Cell>
		<Table.Cell class="text-right">$250.00</Table.Cell>
	  </Table.Row>
	</Table.Body>
  </Table.Root>
  
  
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
