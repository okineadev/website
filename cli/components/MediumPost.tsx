import { Box, Text, type BoxProps } from 'ink'
import Link from 'ink-link'
import type { MediumPost as MediumPostType } from '../../src/data/medium-posts.ts'

interface MediumPostProps extends Omit<MediumPostType, 'image'> {
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

export default MediumPost
