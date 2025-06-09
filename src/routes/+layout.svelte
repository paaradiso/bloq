<script lang="ts">
	import '../app.css';
	import '$lib/css/fonts.css';
	import '$lib/css/custom-colours.css';

	let { children } = $props();
</script>

<div class="bg-bg text-fg flex min-h-screen flex-col items-center">
	{@render children()}
</div>
