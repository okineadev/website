import { Box, Newline, Text, type BoxProps } from 'ink'
import Divider from 'ink-divider'
import Link from 'ink-link'

import socials from '../src/data/socials.ts'
import projects from '../src/data/projects.ts'
import MediumPost from './components/MediumPost.tsx'
import SafariNavbar from './components/Safari™/SafariNavbar.tsx'
import mediumPosts from '../src/data/medium-posts.ts'

// Constants
const BORDER_STYLE: BoxProps['borderStyle'] = 'round'
const PADDING = 1
const BORDER_COLOR: BoxProps['borderColor'] = 'gray'

const App = () => (
	<Box
		borderStyle={BORDER_STYLE}
		borderColor={BORDER_COLOR}
		paddingLeft={PADDING}
		paddingRight={PADDING}
		flexDirection="row"
		alignSelf="flex-start"
		gap={4}
		width={100}
	>
		<Box flexDirection="column">
			<SafariNavbar url="https://okinea.dev" />
			<Divider />

			<Text>
				Hello 👋, my name is <Text bold>Yura</Text>, I'm 17 years old, programmer, designer, I create cool
				websites, TypeScript libraries and amazing CLI applications :)
				<Newline />
			</Text>
			<Text>
				I work on open-source projects that solve real-world problems, and I love seeing my work make a
				genuine impact. Formerly contributed to the development of {}
				<Link url="https://github.com/material-extensions/vscode-material-icon-theme">
					<Text bold>Material Icon Theme</Text>
				</Link>
				{} extension for VS Code.
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
					{mediumPosts.map((post) => (
						<MediumPost key={post.link} post={post} />
					))}
				</Box>
			</Box>
		</Box>
	</Box>
)

export default App
