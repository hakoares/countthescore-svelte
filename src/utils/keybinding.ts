export class KeyEvent {
	currentKeyCode: number;
	allEvents: { trigger: string[]; callback: () => void }[];
	constructor() {
		this.allEvents = [];
		document.addEventListener('keydown', this.listener, false);
	}

	onKeyDown(keycode: string, callback: () => void): this {
		const upperKeycode = keycode.toUpperCase();
		const lowerKeycode = keycode.toLowerCase();
		this.allEvents.push({ trigger: [upperKeycode, lowerKeycode], callback: callback });
		return this;
	}

	remove(): void {
		document.removeEventListener('keydown', this.listener, false);
	}

	listener = (e: KeyboardEvent): void => {
		this.allEvents.forEach((event) => {
			if (event.trigger.includes(e.key)) {
				event.callback();
			}
		});
	};
}
