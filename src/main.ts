import { ViteSSG } from 'vite-ssg/single-page'
import './scss/style.scss'
import App from './App.vue'
import makeBurst from './effects/sparks'

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

export const createApp = ViteSSG(App, ({ isClient }) => {
	if (isClient) {
		import('lenis').then((module) => {
			const Lenis = module.default

			// Initialize Lenis
			new Lenis({ autoRaf: true })

			document.addEventListener('DOMContentLoaded', () => {
				if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
					// Cool click effect
					document.addEventListener('click', (e) => {
						const center = { x: e.pageX, y: e.pageY }
						if (center.x && center.y) {
							makeBurst(center)
						}
					})
				}
			})

			console.log(
				'%c🐈 Sources are available at: https://github.com/okineadev/okineadev-website%cPlease consider giving it a ⭐ if you like it\n' +
					'My Telegram channel: https://t.me/okinea_blog',
				messageStyle,
				messageStyle,
			)
		})
	}
})
