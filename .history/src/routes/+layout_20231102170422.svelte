<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="w-[100vw] h-[100vh] over">
	<slot />
</div>
