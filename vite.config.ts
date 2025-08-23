import { defineConfig, type Plugin, type ResolvedConfig } from 'vite'
import path from 'node:path'

import Vue from '@vitejs/plugin-vue'

// Unplugin icons
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

import ogPlugin from 'vite-plugin-open-graph'

// Compressors
import { createHtmlPlugin } from 'vite-plugin-html'

// Other
import Sitemap from 'vite-plugin-sitemap'
import type { Person, WithContext } from 'schema-dts'

//#region Metadata
const previewImage = {
	url: '/preview.png',
	width: 1024,
	height: 576,
}

const basicPreviewMetadata = {
	title: 'Okinea Dev',
	description: 'Information about me',
}

const JSONld: WithContext<Person> = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Yurii Bogdan',
	url: 'https://okinea.dev',
	address: 'Warsaw, Poland',
	email: 'hi@okinea.dev',
	birthDate: '2008',
	gender: 'male',
	nationality: 'Ukrainian',
	sameAs: ['https://github.com/okineadev', 'https://telegram.okinea.dev'],
	jobTitle: 'Software Developer',
}
//#endregion

/**
 * Vercel Analytics script to be included in the HTML
 *
 * @see https://vercel.com/docs/analytics/quickstart#add-the-script-tag-to-your-site
 */
const vercelAnalyticsScript = `
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
`

/**
 * Vite configuration file.
 *
 * This configuration file sets up Vite with various plugins and settings for development and production environments.
 */
export default defineConfig({
	plugins: [
		Vue(),
		Components({
			resolvers: [
				IconsResolver({
					customCollections: ['other'],
				}),
			],
		}),
		Icons({
			defaultClass: 'icon',
			autoInstall: true,
			customCollections: {
				other: FileSystemIconLoader('./src/assets/icons'),
			},
		}),
		ogPlugin({
			basic: {
				...basicPreviewMetadata,
				url: 'https://okinea.dev',
				siteName: 'okinea.dev',
				image: previewImage,
				locale: 'en_US',
			},
			twitter: {
				...basicPreviewMetadata,
				card: 'summary_large_image',
				site: 'okinea.dev',
				image: previewImage.url,
			},
		}),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					vercelAnalytics: process.env.NODE_ENV === 'production' ? vercelAnalyticsScript : '',
					...basicPreviewMetadata,
					JSONld: JSON.stringify(JSONld),
				},
			},
		}),
		Sitemap({ hostname: 'https://okinea.dev' }),
		((): Plugin => {
			let publicDir: ResolvedConfig['publicDir']

			return {
				name: 'minify-manifest',
				apply: 'build',

				configResolved(resolvedConfig) {
					publicDir = resolvedConfig.publicDir
				},

				async generateBundle() {
					const manifestPath = path.join(publicDir, 'manifest.json')
					const manifest = Bun.file(manifestPath)

					const content = await manifest.text()
					const minified = JSON.stringify(JSON.parse(content))

					this.emitFile({
						type: 'asset',
						fileName: 'manifest.json',
						source: minified,
					})
				},
			}
		})(),
	],
	publicDir: 'src/public',
})
