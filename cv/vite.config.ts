import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	root: __dirname,
	plugins: [vue(), tailwindcss(), viteSingleFile()],
	build: {
		outDir: '../dist/cv',
		emptyOutDir: false,
	},
})
