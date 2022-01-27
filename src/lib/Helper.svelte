<script lang="ts">
	import { settings } from '../utils/store';
    import {fade, fly} from 'svelte/transition';
    import { _ , locale, locales  } from 'svelte-i18n';
    
  
</script>

{#if $settings.viewHelper}
    <section class="help" transition:fade>
        <section class="help-container" transition:fly={{y:200}}>
            <header>
                <h3>CountTheScore: <span class="thin">{$_('help.slug', {default:"Let's get started!"})}</span></h3>
            </header>
            <div class="help-body">
                <h4>Controllers</h4>
                <ul>
                    <li>{$_('help.controllers.use', {default:"Use"})} <b>W</b> {$_('help.controllers.and', {default:"and"})} <b>S</b> {$_('help.controllers.teamA', {default:"to increase and decrease the score for team one."})}</li>
                    <li>{$_('help.controllers.use', {default:"Use"})} <b>P</b> {$_('help.controllers.and', {default:"and"})} <b>L</b> {$_('help.controllers.teamB', {default:"to increase and decrease the score for team two."})}</li>
                    <li>{$_('help.controllers.press', {default:"Press"})} <b>N</b> {$_('help.controllers.reset', {default:"to reset the points for both teams."})}</li>
                    <li>{$_('help.controllers.press', {default:"Press"})} <b>F</b> {$_('help.controllers.fullscreen', {default:"for fullscreen."})}</li>
                    <li>{$_('help.controllers.press', {default:"Press"})} <b>B</b> {$_('help.controllers.themebackground', {default:"to switch between dark and light background theme."})}</li>
                    <li>{$_('help.controllers.press', {default:"Press"})} <b>T</b> {$_('help.controllers.themetext', {default:"to switch between dark and light text theme."})}</li>
                    <li>{$_('help.controllers.press', {default:"Press"})} <b>H</b> {$_('help.controllers.help', {default:"for help."})}</li>
                </ul>
                <select bind:value={$locale}>
                    {#each $locales as locale}
                      <option value={locale}>{locale}</option>
                    {/each}
                  </select>
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
            height: 50vh;
            
            border-radius: 6px;
            background: #f7f7f7;
            box-shadow:
            1.4px 1.4px 2px -14px rgba(0, 0, 0, 0.077),
            3.2px 3.3px 4.6px -14px rgba(0, 0, 0, 0.112),
            5.8px 5.9px 8.3px -14px rgba(0, 0, 0, 0.138),
            9.6px 9.8px 13.8px -14px rgba(0, 0, 0, 0.162),
            15.9px 16.1px 22.8px -14px rgba(0, 0, 0, 0.188),
            27.7px 28.2px 39.8px -14px rgba(0, 0, 0, 0.223),
            60px 61px 86px -14px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;

            header {
                
                padding: 1rem;
                border-bottom: 1px solid #e4e4e4;
                .thin {
                    font-weight: 300;
                }
            }

            .help-body {
                padding: 0 1rem;
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    li {
                        padding: 0.5rem 0;
                        border-bottom: 1px solid #e4e4e4;
                        &:last-child {
                            border-bottom: none;
                        }
                    }
                }
                
            }
        }
	}

	
</style>
