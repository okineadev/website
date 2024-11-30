document.addEventListener('DOMContentLoaded', () => {
	const interactiveElements = document.querySelectorAll(
		'.project-tab, .medium-posts-container .post',
	)

	// biome-ignore lint/complexity/noForEach: <explanation>
	interactiveElements.forEach((tab) => {
		tab.addEventListener('click', () => {
			const link = tab.getAttribute('data-link')
			if (link) {
				window.open(link, '_blank')
			}
		})
	})

	const storageKey = 'theme-preference'

	const getColorPreference = () => {
		if (localStorage.getItem(storageKey)) {
			return localStorage.getItem(storageKey)
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
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
		document
			.querySelector('#theme-toggle')
			?.setAttribute('aria-label', theme.value)

		// Update theme-color meta tag based on CSS variable
		const themeColorMeta = document.querySelector('meta[name="theme-color"]')
		const computedStyles = getComputedStyle(document.body)
		const themeColor = computedStyles.getPropertyValue('--theme-color').trim()
		themeColorMeta.setAttribute('content', themeColor)
	}

	const theme = {
		value: getColorPreference(),
	}

	reflectPreference()

	document.querySelector('#theme-toggle').addEventListener('click', () => {
		theme.value = theme.value === 'light' ? 'dark' : 'light'
		setPreference()
	})

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', ({ matches: isDark }) => {
			theme.value = isDark ? 'dark' : 'light'
			setPreference()
		})
})

const messageStyle = `
	background-color: white;
	color: black;
	font-size: 14px;
	border-radius: 8px;
	padding: 7px 8px;
	text-shadow: 1px 1px 20px #0000001a;
	font-weight: bold;
	font-family: "Raleway", sans-serif;
	margin: 3px;
`

console.log(
	'%c🐈 Sources are available at: https://github.com/okinea-website%cPlease consider giving it a ⭐ if you like it\n' +
		'My Telegram channel: https://t.me/okinea_blog',
	messageStyle,
	messageStyle,
)
