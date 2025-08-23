import path from 'node:path'
import { render } from 'ink-testing-library'
import App from './index.tsx'

const OUT_FILE = path.resolve('../dist/cli.txt')

console.log('Rendering CLI Page...')

const renderedText = render(<App />).lastFrame()
Bun.write(OUT_FILE, renderedText)

console.log(`CLI Page rendered successfully to ${OUT_FILE}!`)
