<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { KeyEvent } from '../utils/keybinding';
	import { settings } from '../utils/store';

	interface team {
		name: string;
		score: number;
	}
	
	let key: KeyEvent;
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
		// Theme Text
		.onKeyDown('T', () => {
			settings.update(s => {
				s.theme.text = s.theme.text === 'light' ? 'dark' : 'light';
				return s;
			});
			
		})
		// Theme Background
		.onKeyDown('B', () => {
			settings.update(s => {
				s.theme.text = s.theme.text === 'light' ? 'dark' : 'light';
				s.theme.background = s.theme.background === 'light' ? 'dark' : 'light';
				return s;
			});
		})
		// Toggle help
		.onKeyDown('H', () => {
			settings.update(s => {
				s.viewHelper = !s.viewHelper;
				return s;
			})
		})
		// Esc help
		.onKeyDown('Escape', () => {
				settings.update(s => {
					s.viewHelper = !s.viewHelper;
					return s;
				})
		})
	})
	
	onDestroy(()=> {
		if(key) key.remove();
	})



</script>

<section class="board" style:background={$settings.theme.background === 'light' ? '#fff' : '#000'}>
	
	{#each teams as team}
		<aside class="team {$settings.theme.text}" >
			<h3>{team.score}</h3>		
			<p>{team.name}</p>
		</aside>
	{/each}

</section>

<style lang="scss">
	
	.board {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		
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
				text-shadow:
				2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
				6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
				12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
				22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
				41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
				100px 100px 80px rgba(0, 0, 0, 0.07)
				;
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
