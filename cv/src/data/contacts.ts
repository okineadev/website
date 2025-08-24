import type { LucideProps } from 'lucide-vue-next'
import { Github, Globe, Mail, Send } from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'
import Discord from '../icons/lucide/Discord'

// biome-ignore lint/complexity/noBannedTypes lint/suspicious/noExplicitAny: Imported from `node_modules/lucide-vue-next/dist/lucide-vue-next.d.ts`
export type LucideIcon = FunctionalComponent<LucideProps, {}, any, {}>

/**
 * Represents a contact entry with display text and an optional link.
 * Can be either a string (shorthand for `{ text: string }`) or a full object with optional href and icon.
 */
type ContactValue = {
	/** The text to display (e.g., email address, username, website) */
	text: string
	/** The actual link or URI (e.g., `'mailto:john.doe@example.com'`, `'https://example.com'`) */
	link?: string
	/** Lucide icon */
	icon: LucideIcon
}

/**
 * Represents a collection of contact information.
 * Keys are contact types (email, github, discord, etc.).
 */
export type Contacts = {
	[key: string]: ContactValue
}

export default {
	email: { text: 'hi@okinea.dev', link: 'mailto:hi@okinea.dev', icon: Mail },
	website: { text: 'okinea.dev', link: 'https://okinea.dev', icon: Globe },
	github: {
		text: 'github.com/okineadev',
		link: 'https://github.com/okineadev',
		icon: Github,
	},
	telegram: {
		text: 'tg.okinea.dev',
		link: 'https://tg.okinea.dev',
		icon: Send,
	},
	discord: { text: 'okineadev', icon: Discord },
} as const satisfies Contacts
