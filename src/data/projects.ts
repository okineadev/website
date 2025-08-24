/**
 * Represents a project with its metadata.
 */
export type Project = {
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

export default [
	{
		repo: 'okineadev/vitepress-plugin-llms',
		description: '📜 A VitePress plugin for generating LLM-friendly documentation',
	},
	{
		repo: 'okineadev/material-icons-figma-plugin',
		description: '🍱 Material Icons for Figma',
	},
	{
		repo: 'okineadev/cli-tips',
		description: '💡 CLI tool that provides useful tips and commands for Linux users',
	},
	{
		repo: 'just-serverless/contributors-table',
		description: '😎 Service for embedding the table of contributors in the readme of the project',
	},
	{
		repo: 'okineadev/okineadev-website',
		description: '🌐 My personal portfolio website showcasing my projects, blog posts and contacts',
	},
	{
		repo: 'okineadev/dotload',
		description: '🌠 Simple tool for installing dotfiles on any machine!',
	},
	{
		repo: 'okineadev/platform-tools-installer-gui',
		description: '📥 Unofficial platform-tools GUI installer (adb, fastboot) for Windows™',
	},
] as const satisfies Project[]
