<script lang="ts">
	export let hide = false;
</script>

<header class:hide>
	<div class="corner">
		<a href="https://hakon.app">H</a>
	</div>
</header>

<style lang="scss">
	header {
		position: relative;
		z-index: 100;
		display: flex;
		justify-content: space-between;
		transition: 0.3s;
		will-change: opacity;
		&.hide {
			opacity: 0;
		}
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
