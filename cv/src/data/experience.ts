import MaterialExtensionsOrgIcon from '../icons/material-extensions-org.svg'
import LlmsTxtLogo from '../icons/llmstxt-logo.webp'

/**
 * Represents a collection of professional experiences across different organizations.
 */
type WorkExperience = {
	/** A path to the icon representing the organization. */
	icon?: string

	/**
	 * The name of the organization or company where you worked.
	 *
	 * @example 'Startup X'
	 */
	organization: string

	role?: string

	/**
	 * The time period during which you worked at the organization.
	 * Can be a year range (e.g., "2020–2023") or a more specific format
	 * (e.g., "Jan 2021 – May 2022").
	 */
	period: string

	/**
	 * A brief description of your role, responsibilities, and contributions
	 * at the organization.
	 * Example: "Developed scalable backend services and mentored junior engineers."
	 */
	description: string
}[]

export default [
	{
		icon: LlmsTxtLogo,
		organization: 'vitepress-plugin-llms',
		role: 'Creator & maintainer',
		description: /* html */ `
<p>Built and maintain a VitePress plugin with <b>11,000</b>+ weekly downloads on npm.</p>

<ul>
	<li>Tech stack: TypeScript, Vue.</li>
	<li>Adopted widely across the VitePress ecosystem; highlighted by Evan You on X.</li>
	<li>Adopted by the most popular documentation websites such as <u>vite.dev</u>, <u>vuejs.org</u>, <u>docs.meteor.com</u> and many others.</li>
</ul>`.trim(),
		period: '2025 - present',
	},
	{
		icon: MaterialExtensionsOrgIcon,
		organization: 'Material Extensions',
		role: 'Maintainer',
		period: '2024.05 - 2025.01 (8 months)',
		description: /* html */ `<p>Worked on the most popular open source extension Material Icon Theme for vscode (<b class="font-medium">180M+ downloads</b>), was involved in project management, automation, security and CI efficiency improvements in the repository, added icons, reviewed pull requests, participated in solving issues regarding the further life of the project and other reforms</p>`,
	},
] as const satisfies WorkExperience
