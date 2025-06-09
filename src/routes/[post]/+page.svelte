<script>
	import SvelteMarkdown from 'svelte-markdown';
	let { data } = $props();

	const { date, title, content } = data;
</script>

<div
	class="container mt-8 mb-32 flex flex-col gap-4 px-96 sm:max-md:px-0 md:max-lg:px-16 lg:max-2xl:px-32"
>
	<a class="text-ume w-full justify-start text-sm" href="/">home</a>
	<div class="flex flex-row items-center justify-between gap-4">
		<h1 class="text-ichigo">{title}</h1>
		<p class="text-gin text-sm">{date}</p>
	</div>

	<hr class="border-fg w-full border-t-1 border-solid" />

	<SvelteMarkdown source={content} />
</div>
