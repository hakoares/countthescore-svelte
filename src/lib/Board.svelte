<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {KeyEvent} from '../utils/keybinding';
	
	interface team {
		name: string;
		score: number;
	}
	
	let key: KeyEvent;
	$:settings ={
		theme: 'light',
	}
	let teams: team[] = [
		{
			name: "Lag A",
			score: 0
		},
		{
			name: "Lag 2",
			score: 0
		}
	];

	
	
	onMount(()=> {
		key = new KeyEvent;
		key
		// Fullscreen
		.onKeyDown('F', () => { 
			if (!document.fullscreenElement) {
			var elem: any = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen();
			}
		} else {
			document.exitFullscreen();
		}
		})
		// Team left increase score
		.onKeyDown('W', () => {
			teams[0].score++;
		})
		// Team left decrease score
		.onKeyDown('S', () => {
			teams[0].score--;
		})
		// Team right increase score
		.onKeyDown('P', () => {
			teams[1].score++;
		})
		// Team right decrease score
		.onKeyDown('L', () => {
			teams[1].score--;
		})
		// Reset score
		.onKeyDown('N', () => {
			teams[0].score = 0;
			teams[1].score = 0;
		})
		// Theme
		.onKeyDown('T', () => {
			settings.theme = settings.theme === "light" ? "dark" : "light"
		})
	})
	
	onDestroy(()=> {
		if(key) key.remove();
	})



</script>

<section class="board">
	{#each teams as team}
		<aside class="team {settings.theme}" >
			<h3>{team.score}</h3>		
			<p>{team.name}</p>
		</aside>
	{/each}

</section>

<style lang="scss">
	.board {
		display: flex;
		/* gap: 20vw; */
		.team {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 50vw;
			&.light {
				color: #fff;
			}
			&.dark {
				color: #151515;
			}
			h3 {
				margin: 0;
				font-size: calc(5em + 10vw);
				@include respond-to(small) {
					font-size: calc(10em + 17vw);

				}
			}
			p {
				color: unset;
				margin: 0;
				font-size: 2em;
				font-weight: 400;
			}
		}
		
	}

	
</style>
