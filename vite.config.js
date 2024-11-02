import liveReload from "vite-plugin-live-reload";
import { createHtmlPlugin } from "vite-plugin-html";
import { compression as viteCompression } from "vite-plugin-compression2";
import Sitemap from "vite-plugin-sitemap";
import { defineConfig } from "vite";

/**
 * Google Tag Manager script to be included in the HTML.
 *
 * This script asynchronously loads the Google Tag Manager library and initializes it with the provided tracking ID.
 * It also sets up the `gtag` function to push events to the `dataLayer`.
 *
 * @constant {string} googleTagScript
 */
const googleTagScript = `
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0TM7HRVX06"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}

	gtag("js", new Date());
	gtag("config", "G-0TM7HRVX06");
</script>
`;

/**
 * Vite configuration file.
 *
 * @file vite.config.js
 * @description This configuration file sets up Vite with various plugins and settings for development and production environments.
 *
 * @plugin liveReload - Enables live reloading during development.
 * @plugin createHtmlPlugin - Generates HTML files with optional minification and script injection.
 */
export default defineConfig({
	plugins: [
		liveReload(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					gtagScript: process.env.NODE_ENV === "production" ? googleTagScript : "",
				},
			},
		}),
		viteCompression({
			filter: /\.(js|css|html)$/i,
			// verbose: true
		}),
		Sitemap({ hostname: "https://okinea.dev" }),
	],
	root: "src",
	server: {
		open: true,
	},
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		// assetsInlineLimit: 0
	},
});
