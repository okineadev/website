export default {
	Languages: ['JavaScript', 'TypeScript', 'Python', 'Bash', 'PowerShell'],
	Frontend: ['Vue', 'Svelte', 'SCSS'],
	'UI Frameworks': ['Tailwind CSS', 'shadcn/ui'],
	Design: ['Figma', 'Inkscape'],
	Backend: ['Docker', 'ElysiaJS', 'Vercel Serverless Functions'],
	'Build tools': ['Vite', 'Bun', 'Gulp', 'Webpack'],
	Testing: ['Bun', 'Vitest', 'Jest'],
	'CI/CD': ['GitHub Actions'],
	Databases: ['SQLite'],
} as const satisfies { [key: string]: string[] }
