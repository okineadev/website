/**
 * Represents a project with its metadata.
 */
export type Project = {
	/**
	 * The display name of the project.
	 * @example "dotload"
	 */
	name: string

	/**
	 * The GitHub repository of the project in the format "username/repo".
	 * @example "okineadev/dotload"
	 */
	repo: string

	/**
	 * A short description of the project, often with emojis for context.
	 * @example "🌠 Simple tool for installing dotfiles on any machine!"
	 */
	description: string
}

/**
 * A mapping of social media platforms to their corresponding profile URLs.
 */
export type Socials = {
	/**
	 * [GitHub](https://github.com) profile URL.
	 * @example "https://github.com/example"
	 */
	GitHub: string

	/**
	 * [Unsplash](https://unsplash.com) profile URL.
	 * @example "https://unsplash.com/@example"
	 */
	Unsplash: string

	/**
	 * [Telegram](https://telegram.org) profile URL.
	 * @example "https://t.me/example"
	 */
	Telegram: string

	/**
	 * [Medium](https://medium.com) profile URL.
	 * @example "https://example.medium.com"
	 */
	Medium: string

	/**
	 * [Discord](https://discord.com) profile URL.
	 * @example "https://discord.com/users/example"
	 */
	Discord: string

	/**
	 * [Stack Overflow](https://stackoverflow.com) profile URL.
	 * @example "https://stackoverflow.com/users/12345678/example"
	 */
	'Stack Overflow': string
}
