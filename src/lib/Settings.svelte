<script lang="ts">
	import { settings } from '../utils/store';
	import { fade, fly } from 'svelte/transition';
	import { _, locale, locales } from 'svelte-i18n';

	const exitHelper = () => {
		settings.update((s) => {
			s.viewHelper = !s.viewHelper;
			return s;
		});
	};
	const changeBackground = (selectorFiles: any) => {
		settings.update((s) => {
			s.backgroundImage = URL.createObjectURL(selectorFiles[0]);
			return s;
		});
	};
	const toggleTextColor = (style: 'light' | 'dark') => {
		settings.update((s) => {
			s.theme.text = style;
			return s;
		});
	};
</script>

{#if $settings.viewHelper}
	<section class="help" transition:fade>
		<section class="help-container" transition:fly={{ y: 200 }}>
			<header>
				<h3>
					CountTheScore: <span class="thin"
						>{$_('settings.slug', { default: "Let's get started" })}</span
					>
				</h3>
				<button class="btn-ghost" on:click={exitHelper}>
					<svg
						class="icon dark"
						version="1.1"
						preserveAspectRatio="none"
						x="0px"
						y="0px"
						viewBox="0 0 100 100"
					>
						<path
							stroke="none"
							d=" M 80 10.85 L 50 40.85 20 10.85 10.85 20 40.85 50 10.85 80 20 89.15 50 59.15 80 89.15 89.15 80 59.15 50 89.15 20 80 10.85 Z"
						/>
					</svg>
				</button>
			</header>
			<div class="help-body">
				<div class="help-body-section">
					<h4>{$_('settings.controllers.title', { default: 'Controllers' })}</h4>
					<ul>
						<li>
							{$_('settings.controllers.use', { default: 'Use' })} <b>W</b>
							{$_('settings.controllers.and', { default: 'and' })} <b>S</b>
							{$_('settings.controllers.teamA', {
								default: 'to increase and decrease the score for team one.'
							})}
						</li>
						<li>
							{$_('settings.controllers.use', { default: 'Use' })} <b>P</b>
							{$_('settings.controllers.and', { default: 'and' })} <b>L</b>
							{$_('settings.controllers.teamB', {
								default: 'to increase and decrease the score for team two.'
							})}
						</li>
						<li>
							{$_('settings.controllers.press', { default: 'Press' })} <b>N</b>
							{$_('settings.controllers.reset', { default: 'to reset the points for both teams.' })}
						</li>
						<li>
							{$_('settings.controllers.press', { default: 'Press' })} <b>F</b>
							{$_('settings.controllers.fullscreen', { default: 'for fullscreen.' })}
						</li>
						<li>
							{$_('settings.controllers.press', { default: 'Press' })} <b>B</b>
							{$_('settings.controllers.themebackground', {
								default: 'to switch between dark and light background theme.'
							})}
						</li>
						<li>
							{$_('settings.controllers.press', { default: 'Press' })} <b>H</b>
							{$_('settings.controllers.help', { default: 'for help.' })}
						</li>
					</ul>
				</div>
				<div class="help-body-section">
					<h4>{$_('teamname.title', { default: 'Change team name' })}</h4>
					<div class="help-body-section-row">
						<input class="input" bind:value={$settings.teamNames[0]} />
						<input class="input" bind:value={$settings.teamNames[1]} />
					</div>
				</div>
				<div class="help-body-section">
					<h4>{$_('settings.background.title', { default: 'Change background image' })}</h4>
					<div class="help-body-section-row spaceBetween">
						<div class="background-container">
							<label class="btn">
								<input
									class="image-input"
									on:change={(event) => changeBackground(event.target.files)}
									type="file"
								/>
								<svg
									class="icon icon-upload"
									version="1.1"
									x="0px"
									y="0px"
									viewBox="-949 951 100 100"
									style="enable-background:new -949 951 100 100;"
									xml:space="preserve"
									><switch
										><foreignObject
											requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
											x="0"
											y="0"
											width="1"
											height="1"
										/><g
											><g
												><polygon
													points="-871.9,1009.5 -871.9,1041.5 -926.1,1041.5 -926.1,1009.5 -933.1,1009.5 -933.1,1048.5 -864.9,1048.5      -864.9,1009.5    "
												/><polygon
													points="-902.5,967 -902.5,1023.3 -895.5,1023.3 -895.5,966.8 -878,984.3 -873.1,979.3 -898.9,953.5 -924.7,979.3      -919.8,984.3    "
												/></g
											></g
										></switch
									></svg
								>
								<span
									>{$_('settings.background.upload', {
										default: 'Upload background image'
									})}</span
								>
							</label>
							{#if $settings.backgroundImage}
								<button
									class="btn-ghost"
									on:click={() =>
										settings.update((s) => {
											s.backgroundImage = undefined;
											return s;
										})}
								>
									<svg
										class="icon"
										version="1.1"
										preserveAspectRatio="none"
										x="0px"
										y="0px"
										viewBox="0 0 100 100"
									>
										<path
											stroke="none"
											d=" M 80 10.85 L 50 40.85 20 10.85 10.85 20 40.85 50 10.85 80 20 89.15 50 59.15 80 89.15 89.15 80 59.15 50 89.15 20 80 10.85 Z"
										/>
									</svg>
								</button>
							{/if}
						</div>
					</div>
				</div>
				<div class="help-body-section">
					<h4>{$_('settings.text.title', { default: 'Change text color' })}</h4>
					<div class="help-body-section-row spaceBetween">
						<div class="btn-group-container">
							<div class="btn-group">
								<button
									class="btn"
									class:isActive={$settings.theme.text === 'light'}
									on:click={() => toggleTextColor('light')}
									>{$_('settings.text.light', { default: 'Light' })}</button
								>
								<button
									class="btn"
									class:isActive={$settings.theme.text === 'dark'}
									on:click={() => toggleTextColor('dark')}
									>{$_('settings.text.dark', { default: 'Dark' })}</button
								>
							</div>
						</div>
					</div>
				</div>
				<div class="help-body-section">
					<h4>{$_('settings.language.title', { default: 'Language' })}</h4>
					<select class="dropdown" bind:value={$locale}>
						{#each $locales as locale}
							<option class="item" value={locale}>{$_(locale)}</option>
						{/each}
					</select>
				</div>
			</div>
		</section>
	</section>
{/if}

<style lang="scss">
	.help {
		position: absolute;

		z-index: 999;
		top: 0;
		left: 0;
		height: 100vh;

		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		background: #00000083;

		&-container {
			width: 600px;
			max-width: 90vw;
			max-height: 90vh;
			height: fit-content;
			overflow: scroll;

			border-radius: 6px;
			background: #f7f7f7;
			box-shadow: 1.4px 1.4px 2px -14px rgba(0, 0, 0, 0.077),
				3.2px 3.3px 4.6px -14px rgba(0, 0, 0, 0.112), 5.8px 5.9px 8.3px -14px rgba(0, 0, 0, 0.138),
				9.6px 9.8px 13.8px -14px rgba(0, 0, 0, 0.162),
				15.9px 16.1px 22.8px -14px rgba(0, 0, 0, 0.188),
				27.7px 28.2px 39.8px -14px rgba(0, 0, 0, 0.223), 60px 61px 86px -14px rgba(0, 0, 0, 0.3);
			display: flex;
			flex-direction: column;

			header {
				padding: 1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.thin {
					font-weight: 300;
				}
			}

			.help-body {
				padding: 0 1rem 1rem;
				&-section {
					border-top: 2px solid #e4e4e4;
					padding: 1rem 0;
					h4 {
						margin: 0 0 0.5rem;
						padding-bottom: 0.2rem;
					}
					ul {
						list-style: none;
						padding: 0;
						margin: 0;
						li {
							padding: 0.3rem 0;
							&:last-child {
								border-bottom: none;
							}
						}
					}
					.image-input {
						display: none;
					}

					&-row,
					.background-container {
						display: flex;
						gap: 0.3rem;

						.btn-group {
							display: flex;
							.btn {
								background: color(lightest);
								&:first-of-type {
									border-top-right-radius: 0;
									border-bottom-right-radius: 0;
								}
								&:last-of-type {
									border-top-left-radius: 0;
									border-bottom-left-radius: 0;
								}
								&.isActive {
									background: color(lighterer);
								}
							}
						}
						&.spaceBetween {
							justify-content: space-between;
						}
					}
				}
			}
		}
	}
</style>
