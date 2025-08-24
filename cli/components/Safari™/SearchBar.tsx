import { Box, Text } from 'ink'
import Link from 'ink-link'

/**
 * Props for the SearchBar component.
 */
export interface SearchBarProps {
	/**
	 * The URL to be displayed and linked in the search bar.
	 */
	url: string
}

export default ({ url }: SearchBarProps) => (
	<Box width="100%" justifyContent="center" position="absolute">
		<Text>
			<Text dimColor={true}>【</Text>
			{'         '}
			<Text color="whiteBright">
				<Link url={url} fallback={false}>
					{url.replace(/^https?:\/\//, '')}
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
