import { writable } from 'svelte/store';

export const settings = writable({
	theme: {
		text: 'light',
		background: 'dark'
	},
	viewHelper: true
});
