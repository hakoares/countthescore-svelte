<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// Components
	import Board from '$lib/Board.svelte';
	import Settings from '$lib/Settings.svelte';

	// Language
	import { addMessages, init } from 'svelte-i18n';
	import no from '../lang/no.json';
	import en from '../lang/en.json';

	addMessages('en', en);
	addMessages('no', no);

	init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
</script>

<svelte:head>
	<title>CountTheScore</title>
	<meta
		name="description"
		content="Scoreboard for two teams on big screen. Count the score. Grab the mic. Scoreboard for big screen. Game show."
	/>
</svelte:head>
<Settings />
<Board />

<style lang="scss">
	.hide {
		cursor: none !important;
	}
</style>
