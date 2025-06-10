<script>
	const { level = '' } = $props();

	const borderStyle = level == 'secondary' ? 'border-dashed' : 'border-solid';
	const borderWidth = level == 'secondary' ? 'w-9/10' : 'w-full';
</script>

<hr class="border-fg {borderStyle} {borderWidth} border-t-1" />
