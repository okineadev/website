import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'

// Unplugin icons
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

import ogPlugin from 'vite-plugin-open-graph'

// Compressors
import { createHtmlPlugin } from 'vite-plugin-html'
import { compression as viteCompression } from 'vite-plugin-compression2'

// Other
import Sitemap from 'vite-plugin-sitemap'
import autoprefixer from 'autoprefixer'
import type { Person, WithContext } from 'schema-dts'

import DOMAIN from './CNAME.ts'

const previewImage = {
	url: '/assets/preview.png',
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
	name: 'okineadev',
	url: `https://${DOMAIN}`,
	birthDate: '2008',
	gender: 'male',
	nationality: 'Ukrainian',
	sameAs: ['https://github.com/okineadev', `https://telegram.${DOMAIN}`],
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
				url: `https://${DOMAIN}`,
				siteName: DOMAIN,
				image: previewImage,
				locale: 'en_US',
			},
			twitter: {
				...basicPreviewMetadata,
				card: 'summary_large_image',
				site: DOMAIN,
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
					DOMAIN: DOMAIN,
				},
			},
		}),
		// @ts-expect-error
		viteCompression({ filter: /\.(js|css|html)$/i }),
		Sitemap({ hostname: `https://${DOMAIN}` }),
	],
	publicDir: 'src/public',
	css: {
		postcss: { plugins: [autoprefixer()] },
	},

	define: {
		DOMAIN: JSON.stringify(DOMAIN),
	},
})
