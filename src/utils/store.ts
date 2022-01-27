import { writable } from 'svelte/store';

export const settings = writable({
	theme: {
		text: 'light',
		background: 'dark'
	},
	teamNames: ['Team 1', 'Team B'],
	backgroundImage: undefined,
	viewHelper: true
});
