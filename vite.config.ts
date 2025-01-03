import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { compression as viteCompression } from 'vite-plugin-compression2'
import Sitemap from 'vite-plugin-sitemap'
import autoprefixer from 'autoprefixer'
import svgLoader from 'vite-svg-loader'

const googleTagID = 'G-0TM7HRVX06'

/** Google Tag Manager script to be included in the HTML */
const googleTagScript = `
<script async src="https://www.googletagmanager.com/gtag/js?id=${googleTagID}"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}

	gtag("js", new Date());
	gtag("config", "${googleTagID}");
</script>
`

/**
 * Vite configuration file.
 *
 * This configuration file sets up Vite with various plugins and settings for development and production environments.
 */
export default defineConfig({
	plugins: [
		vue(),
		svgLoader({
			defaultImport: 'component',
			// svgo: false,
		}),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					gtagScript:
						process.env.NODE_ENV === 'production' ? googleTagScript : '',
				},
			},
		}),
		// @ts-expect-error
		viteCompression({ filter: /\.(js|css|html)$/i }),
		Sitemap({ hostname: 'https://okinea.dev' }),
	],
	css: {
		postcss: {
			// @ts-expect-error idk how to fix it...
			plugins: [autoprefixer()],
		},
	},
})
