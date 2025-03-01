import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'

// Unplugin icons
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// Compressors
import { createHtmlPlugin } from 'vite-plugin-html'
import { compression as viteCompression } from 'vite-plugin-compression2'

// Other
import Sitemap from 'vite-plugin-sitemap'
import autoprefixer from 'autoprefixer'

import DOMAIN from './CNAME.ts'

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
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					vercelAnalytics: process.env.NODE_ENV === 'production' ? vercelAnalyticsScript : '',
					DOMAIN: DOMAIN,
				},
			},
		}),
		// @ts-expect-error
		viteCompression({ filter: /\.(js|css|html)$/i }),
		Sitemap({ hostname: `https://${DOMAIN}` }),
	],
	css: {
		postcss: { plugins: [autoprefixer()] },
	},

	define: {
		DOMAIN: JSON.stringify(DOMAIN),
	},
})
