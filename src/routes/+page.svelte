<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Separator from '$lib/components/Separator.svelte';
	let { data } = $props();
	const { posts } = data;
</script>

<div
	class="container mt-8 mb-32 flex flex-col gap-4 px-96 sm:max-md:px-0 md:max-lg:px-16 lg:max-2xl:px-32"
>
	<!-- <a class="text-ume w-full justify-start text-sm" href="/">home</a> -->
	<!-- <div class="flex flex-row items-center justify-between gap-4"> -->
	<!-- <h1 class="text-ichigo">{title}</h1> -->
	<!-- <p class="text-gin text-sm">{date}</p> -->
	<!-- </div> -->

	<Separator />

	{#each posts as post}
		<div>
			<a href="/{post.fileName}" class="flex flex-col items-center gap-4">
				<div class="flex w-full flex-row items-center justify-between gap-4">
					<h4>{post.title}</h4>
					<p class="text-gin text-sm">{post.date}</p>
				</div>

				<Separator level="secondary" />

				<p
					class="h-32 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]"
				>
					<SvelteMarkdown source={post.content.split('\n').slice(0, 17).join('\n')} />
				</p>
			</a>
		</div>

		<Separator />
	{/each}
</div>
