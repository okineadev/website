// @ts-nocheck

import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

document.addEventListener('DOMContentLoaded', () => {
	if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
		const contentElements = document.querySelectorAll('.content > *')
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('animate')
							observer.unobserve(entry.target) // Stop observing once animated
						}, index * 200) // Apply delay based on index
					}
				})
			},
			{ threshold: 0.1 },
		) // Adjust threshold as needed

		// biome-ignore lint/complexity/noForEach: <explanation>
		contentElements.forEach((element) => {
			observer.observe(element)
		})
	}

	// const interactiveElements = document.querySelectorAll(
	// 	'.project-tab, .medium-posts-container .post',
	// )

	// // biome-ignore lint/complexity/noForEach: <explanation>
	// interactiveElements.forEach((tab) => {
	// 	tab.addEventListener('click', () => {
	// 		const link = tab.getAttribute('data-link')
	// 		if (link) {
	// 			window.open(link, '_blank')
	// 		}
	// 	})
	// })
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
