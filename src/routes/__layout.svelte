<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { settings } from '../utils/store';
	import '../app.css';

	let mouseIdle = false;
	let idleTimer = null;
	let idleState = false;

	const showFoo = (time: number) => {
		clearTimeout(idleTimer);
		if (idleState == true) {
			mouseIdle = false;
		}
		idleState = false;
		idleTimer = setTimeout(function () {
			idleState = true;
			mouseIdle = true;
		}, time);
	};

	const handleMousemove = () => {
		if (!$settings.viewHelper) {
			showFoo(3000);
		} else {
			mouseIdle = false;
		}
	};
</script>

<svelte:head>
	<script defer data-domain="countthescore.com" src="https://plausible.io/js/plausible.js"></script>
</svelte:head>
<Header hide={mouseIdle} />

<main class:hide={mouseIdle} on:mousemove={handleMousemove}>
	<slot />
</main>

<footer />

<style lang="scss">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		&.hide {
			cursor: none;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
