<template>
	<!-- Color theme switch slider -->
	<button
		class="theme-toggle"
		id="theme-toggle"
		title="Toggle light and dark theme"
		aria-label="Toggle light and dark theme"
		aria-live="polite"
		aria-pressed="false"
	>
		<svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
			<mask class="moon" id="moon-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
				<circle cx="24" cy="10" r="6" fill="black"></circle>
			</mask>
			<circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
			<g class="sun-beams" stroke="currentColor">
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</g>
		</svg>
	</button>
</template>

<script setup lang="ts">
// @ts-nocheck
import { onMounted } from 'vue'

const storageKey = 'theme-preference'

onMounted(() => {
	const getColorPreference = () => {
		if (localStorage.getItem(storageKey)) {
			return localStorage.getItem(storageKey)
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}

	const setPreference = () => {
		localStorage.setItem(storageKey, theme.value)
		reflectPreference()
	}

	/**
	 * Updates the document's theme based on the current theme preference.
	 *
	 * This function sets the body's class attribute to the current theme value,
	 * updates the aria-label of the theme toggle button, and adjusts the
	 * theme-color meta tag to match the CSS variable for the theme color.
	 */
	const reflectPreference = () => {
		document.body.setAttribute('class', theme.value)
		document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.value)

		// Update theme-color meta tag based on CSS variable
		const themeColorMeta = document.querySelector('meta[name="theme-color"]')
		const computedStyles = getComputedStyle(document.body)
		const themeColor = computedStyles.getPropertyValue('--theme-color').trim()
		themeColorMeta.setAttribute('content', themeColor)
	}

	const theme = {
		value: getColorPreference(),
	}

	document.addEventListener('DOMContentLoaded', () => {
		reflectPreference()

		document.querySelector('#theme-toggle').addEventListener('click', () => {
			theme.value = theme.value === 'light' ? 'dark' : 'light'
			setPreference()
		})

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
			theme.value = isDark ? 'dark' : 'light'
			setPreference()
		})
	})
})
</script>

<style lang="scss">
.theme-toggle {
	$size: 40px;
	background: none;
	border: none;

	padding: 0;

	position: absolute;

	top: 30px;
	right: 30px;

	border-radius: $size;
	cursor: pointer;
	touch-action: manipulation;

	-webkit-tap-highlight-color: transparent;
	z-index: 9999;
	width: $size;

	& > svg {
		inline-size: 100%;
		block-size: 100%;

		stroke-linecap: round;
		display: block;
	}

	.sun-and-moon {
		.moon,
		.sun,
		.sun-beams {
			transform-origin: center center;
		}

		.moon,
		.sun {
			fill: var(--theme-switch-color);
		}

		.sun-beams {
			stroke: var(--theme-switch-color);
			stroke-width: 2px;
		}

		@media (prefers-reduced-motion: no-preference) {
			.sun {
				transition: transform 0.5s var(--ease-elastic-3);
			}

			.sun-beams {
				transition:
					transform 0.5s var(--ease-elastic-4),
					opacity 0.5s var(--ease-3);
			}

			.moon > circle {
				transition: transform 0.25s var(--ease-out-5);
			}

			@supports (cx: 1) {
				.moon > circle {
					transition: cx 0.25s var(--ease-out-5);
				}
			}
		}
	}

	&:hover,
	&:focus-visible {
		.sun-and-moon {
			.moon,
			.sun {
				fill: var(--theme-switch-hover-color);
			}

			.sun-beams {
				stroke: var(--theme-switch-hover-color);
			}
		}
	}

	&[aria-label='dark'] {
		.sun-and-moon {
			.sun {
				transform: scale(1.75);
			}
			.sun-beams {
				opacity: 0;
			}
			.moon > circle {
				transform: translate(-7px);

				@supports (cx: 1) {
					transform: translate(0);
					cx: 17;
				}
			}

			@media (prefers-reduced-motion: no-preference) {
				.sun {
					transform: scale(1.75);
					transition-timing-function: var(--ease-3);

					transition-duration: 0.25s;
				}

				.sun-beams {
					transform: rotate(-25deg);

					transition-duration: 0.15s;
				}

				.moon > circle {
					transition-delay: 0.25s;

					transition-duration: 0.5s;
				}
			}
		}
	}
}
</style>
