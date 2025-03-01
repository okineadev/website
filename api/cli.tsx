import type { VercelRequest, VercelResponse } from '@vercel/node'

import { render } from 'ink-testing-library'
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'
import { Box, Newline, Text, type BoxProps, Spacer } from 'ink'
import Divider from 'ink-divider'
import Link from 'ink-link'

process.env.FORCE_COLOR = 'true'

const SearchBar = () => (
	<Box width="100%" justifyContent="center" position="absolute">
		<Text>
			<Text dimColor={true}>【</Text>
			{'         '}
			<Text color="whiteBright">
				<Link url="https://okinea.dev" fallback={false}>
					okinea.dev
				</Link>
			</Text>
			{'      '}
			<Text>
				↻{'  '}
				<Text dimColor={true}>】</Text>
			</Text>
		</Text>
	</Box>
)

const macOSControlButtons = (
	<Text>
		<Text color="red">●</Text> <Text color="yellow">●</Text> <Text color="green">●</Text>
	</Text>
)

interface SafariNavbarProps {
	countryCode?: string
}

const SafariNavbar: React.FC<SafariNavbarProps> = ({ countryCode }) => (
	<Box>
		{macOSControlButtons}
		<Box columnGap={3} marginLeft={3}>
			<Text>⯇</Text>
			<Text dimColor={true}>⯈</Text>
		</Box>
		<SearchBar />
		<Spacer />
		<Text>
			{countryCode && `${countryCode} `}
			<Text bold>+</Text>
		</Text>
	</Box>
)

interface MediumPostProps {
	/**
	 * The title of the post, displayed inside the component.
	 */
	title: string

	/**
	 * The description of the post, shown below the title.
	 */
	description: string

	/**
	 * Link to the post
	 */
	link: string

	/**
	 * The minimum width of the post box (in characters).
	 * @default 30
	 */
	minWidth?: string

	/**
	 * Additional properties passed to the `Box` component from the `ink` library.
	 */
	boxProps?: BoxProps
}

const MediumPost: React.FC<MediumPostProps> = ({ title, description, link, minWidth = 30, boxProps }) => (
	<Box
		flexDirection="column"
		padding={1}
		borderStyle="round"
		borderColor="cyan"
		flexGrow={1}
		width={minWidth}
		{...boxProps}
	>
		<Link url={link} fallback={false}>
			<Text color="blue" bold>
				{title}
			</Text>
		</Link>
		<Text dimColor>{description}</Text>
	</Box>
)

import socials from './_socials.js'

// @ts-ignore
import projects from '../src/projects.js'

// Constants
const BORDER_STYLE: BoxProps['borderStyle'] = 'round'
const PADDING = 1
const BORDER_COLOR: BoxProps['borderColor'] = 'gray'

interface AppProps {
	countryCode?: string
}

const App: React.FC<AppProps> = ({ countryCode }) => (
	<Box
		borderStyle={BORDER_STYLE}
		borderColor={BORDER_COLOR}
		paddingLeft={PADDING}
		paddingRight={PADDING}
		flexDirection="row"
		alignSelf="flex-start"
		gap={4}
		width={95}
	>
		<Box flexDirection="column">
			<SafariNavbar countryCode={countryCode} />
			<Divider />

			<Text>
				Hello 👋, my name is <Text bold>Yura</Text>, I'm 16 years old, programmer, designer, I create cool websites,
				amazing CLI applications and I also write posts on Medium from time to time :)
				<Newline />
			</Text>
			<Text>
				I work on open source projects, create my own and help others. I am the (ex) maintainer of the{' '}
				<Link url="https://github.com/material-extensions/vscode-material-icon-theme" fallback={false}>
					<Text bold>Material Icon Theme</Text>
				</Link>{' '}
				extension for VS Code, Co-founder of{' '}
				<Link url="https://github.com/ZGalera" fallback={false}>
					<Text bold>Zgalera Inc</Text>
				</Link>
				.
				<Newline />
			</Text>

			{/* Projects Section */}
			<Box flexDirection="column" alignItems="center">
				<Text bold>📁 Projects</Text>
			</Box>

			<Box flexDirection="column" marginTop={1}>
				<Box flexDirection="column" alignItems="center">
					<Box flexDirection="row" gap={1} flexWrap="wrap" justifyContent="center">
						{projects.map((project) => (
							<Link key={project.repo} url={`https://github.com/${project.repo}`} fallback={false}>
								<Text color="green">{project.repo.split('/')[1]}</Text>
							</Link>
						))}
					</Box>
				</Box>
			</Box>

			{/* Socials Section */}
			<Box flexDirection="column" alignItems="center" marginTop={1}>
				<Text bold>🌍 Socials</Text>
			</Box>

			<Box flexDirection="column" marginTop={1}>
				<Box flexDirection="column" alignItems="center">
					<Box flexDirection="row" gap={1} flexWrap="wrap">
						{Object.entries(socials).map(([key, value]) => (
							<Link key={key} url={value} fallback={false}>
								<Text color="red">{key}</Text>
							</Link>
						))}
					</Box>
				</Box>
			</Box>

			<Box flexDirection="column" alignItems="center" marginTop={1}>
				<Text bold>
					📰 My posts on{' '}
					<Text backgroundColor="greenBright" color="black">
						{' '}
						Medium{' '}
					</Text>
				</Text>
			</Box>

			<Box flexDirection="column" marginTop={1}>
				<Box flexDirection="row" alignItems="stretch" flexWrap="wrap" gap={1}>
					<MediumPost
						title="How to get a free macOS machine for testing?"
						description="if you have created a program and want to test it on different operating systems (including macOS), but if..."
						link="https://medium.com/@okineadev/how-to-get-a-free-macos-machine-for-testing-b2f6c72415fd"
					/>
					<MediumPost
						title="How to set up VNC on a headless Raspberry Pi..."
						description="If you have Ubuntu Server installed on your Raspberry Pi and you want to connect to its interface without a monitor or mouse?"
						link="https://medium.com/@okineadev/how-to-set-up-vnc-on-a-headless-raspberry-pi-with-ubuntu-server-24-04-96cc8ddf65bc"
					/>
				</Box>
			</Box>
		</Box>
	</Box>
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
	try {
		const countryCodeHeader = req.headers['x-vercel-ip-country']
		const countryCode: string | undefined =
			typeof countryCodeHeader === 'string'
				? countryCodeHeader
				: Array.isArray(countryCodeHeader)
					? countryCodeHeader[0]
					: undefined

		// Use the ink-testing-library's render function
		const { lastFrame } = render(<App countryCode={countryCode} />)

		const renderedText = lastFrame()

		// Set the content type to plain text
		res.setHeader('Content-Type', 'text/plain; charset=utf-8')
		res.setHeader('Cache-Control', 'public, max-age=86400')

		// Send the rendered output
		res.status(200).send(renderedText)
	} catch (error) {
		console.error('Error rendering Ink component:', error)
		// @ts-ignore
		res.status(500).send(`Error: ${error.message}`)
	}
}
