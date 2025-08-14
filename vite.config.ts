import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'

// Unplugin icons
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

import ogPlugin from 'vite-plugin-open-graph'
import { VitePWA } from 'vite-plugin-pwa'

// Compressors
import { createHtmlPlugin } from 'vite-plugin-html'

// Other
import Sitemap from 'vite-plugin-sitemap'
import type { Person, WithContext } from 'schema-dts'

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
		VitePWA({
			manifest: {
				name: basicPreviewMetadata.title,
				description: '🌐 My personal portfolio website showcasing my projects, blog posts, and contacts',
				display: 'standalone',
				background_color: '#101010',
				theme_color: '#262525',
				icons: [
					{
						src: '/favicon.svg',
						sizes: 'any',
						type: 'image/svg+xml',
					},
					{
						src: '/favicon-16x16.png',
						sizes: '16x16',
						type: 'image/png',
					},
					{
						src: '/favicon-32x32.png',
						sizes: '32x32',
						type: 'image/png',
					},
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon.png',
						sizes: '180x180',
						type: 'image/png',
					},
				],
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
	],
	publicDir: 'src/public',
})
