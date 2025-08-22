import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

type NonNullAwaited<T> = NonNullable<Awaited<T>>

const browser = await puppeteer.launch({
	args: chromium.args,
	executablePath: await chromium.executablePath(),
})
const page = await browser.newPage()

const filePath = path.resolve(__dirname, '../../dist/cv/index.html')
const fileUrl = pathToFileURL(filePath).href

// Open the local file and wait for load
await page.goto(fileUrl)

const bodyHandle = (await page.$('body')) as unknown as NonNullAwaited<ReturnType<typeof page.$>>
const { width, height } = (await bodyHandle.boundingBox()) as unknown as NonNullAwaited<
	ReturnType<typeof bodyHandle.boundingBox>
>

await bodyHandle.dispose()

// Generate PDF
const pdfPath = path.resolve(__dirname, '../../dist/cv.pdf')
await page.pdf({
	path: pdfPath,
	printBackground: true,
	width: `${width}px`,
	height: `${height}px`,
})

await browser.close()
console.log('PDF generated:', pdfPath)
