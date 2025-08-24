import { Box, Text, Spacer } from 'ink'
import SearchBar, { type SearchBarProps } from './SearchBar.tsx'
import macOSControlButtons from './MacOSControlButtons.tsx'

export default ({ url }: SearchBarProps) => (
	<Box>
		{macOSControlButtons}
		<Box columnGap={3} marginLeft={3}>
			<Text>⯇</Text>
			<Text dimColor={true}>⯈</Text>
		</Box>
		<SearchBar url={url} />
		<Spacer />
		<Text bold>+</Text>
	</Box>
)
