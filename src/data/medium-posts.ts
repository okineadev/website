/**
 * Represents a single blog post with its metadata.
 */
export interface MediumPost {
	/**
	 * The title of the blog post.
	 */
	title: string
	/**
	 * A brief description or excerpt of the blog post.
	 */
	description: string
	/**
	 * The URL where the full blog post can be found.
	 */
	link: string
	/**
	 * The URL of an image representing the blog post.
	 */
	image: string
}

export default [
	{
		title: 'Generate /llms.txt for your documentation website on VitePress',
		description:
			'Large language models increasingly rely on website information, but face a critical limitation: context windows are too small to handle most websites in their entirety...',

		link: 'https://medium.com/@okineadev/generate-llms-txt-for-your-documentation-website-on-vitepress-64762cc1150b',
		image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y_K7r4GRXhStaK40jtAZWw.png',
	},
	{
		title: 'How to get a free macOS machine for testing?',
		description:
			'if you have created a program and want to test it on different operating systems (including macOS), but if...',
		link: 'https://medium.com/@okineadev/how-to-get-a-free-macos-machine-for-testing-b2f6c72415fd',
		image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Q2Fal4qTIXomyZTI',
	},
] as const satisfies MediumPost[]
