import path from 'node:path'
import { render } from 'ink-testing-library'
import App from './index.tsx'

const OUT_FILE = path.join('..', 'src/public', 'cli.txt')

console.log('Rendering CLI Page...')

// Use the ink-testing-library's render function
const { lastFrame } = render(<App />)

const renderedText = lastFrame()

Bun.write(OUT_FILE, renderedText)

console.log(`CLI Page rendered successfully to ${OUT_FILE}!`)
