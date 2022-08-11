import { settings } from '../utils/store';
import { get } from 'svelte/store';

export class KeyEvent {
	currentKeyCode: number;
	allEvents: { trigger: string[]; callback: () => void }[];
	constructor() {
		this.allEvents = [];
		document.addEventListener('keydown', this.listener, false);
	}

	onKeyDown(keycode: string, callback: () => void): this {
		if (keycode == 'Escape') {
			this.allEvents.push({ trigger: [keycode], callback: callback });
		} else {
			const upperKeycode = keycode.toUpperCase();
			const lowerKeycode = keycode.toLowerCase();
			this.allEvents.push({ trigger: [upperKeycode, lowerKeycode], callback: callback });
		}
		return this;
	}

	remove(): void {
		document.removeEventListener('keydown', this.listener, false);
	}

	listener = (e: KeyboardEvent): void => {
		const disable = get(settings).viewHelper;
		this.allEvents.forEach((event) => {
			if (event.trigger.includes(e.key)) {
				if (disable && e.key === 'Escape') {
					event.callback();
				} else if (!disable && e.key !== 'Escape') {
					event.callback();
				}
			}
		});
	};
}
