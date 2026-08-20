import { writable } from 'svelte/store';

export interface Settings {
	theme: {
		text: 'light' | 'dark';
		background: 'light' | 'dark';
	};
	teamNames: string[];
	backgroundImage: string | undefined;
	viewHelper: boolean;
}

export const settings = writable<Settings>({
	theme: {
		text: 'light',
		background: 'dark'
	},
	teamNames: ['Team 1', 'Team B'],
	backgroundImage: undefined,
	viewHelper: true
});
