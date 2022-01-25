<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<!-- HÅ -->
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	a {
		color: #fff;
		font-weight: 600;
		text-decoration: none;
	}

	
</style>
