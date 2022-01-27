<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Board from '$lib/Board.svelte';
	import Helper from '$lib/Helper.svelte';

	import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
	import no from '../lang/no.json';
	import en from '../lang/en.json';
	addMessages('English', en);
	addMessages('Norsk', no);
	init({
		fallbackLocale: 'English',
		initialLocale: getLocaleFromNavigator(),
	})
	
</script>

<svelte:head>
	<title>CountTheScore</title>
</svelte:head>

	
	<Helper/>
	<Board />


<style lang="scss">

</style>
