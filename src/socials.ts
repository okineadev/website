import type { Socials } from './types'

declare const DOMAIN: string

const socials: Socials = {
	GitHub: 'https://github.com/okineadev',
	Unsplash: 'https://unsplash.com/@okineadev',
	Telegram: `https://telegram.${DOMAIN}`,
	Medium: 'https://okineadev.medium.com',
	Discord: 'https://discord.com/users/okineadev',
	'Stack Overflow': 'https://stackoverflow.com/users/21165921/okinea-dev',
}

export default socials
