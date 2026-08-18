export default {
	Languages: ['TypeScript', 'Python', 'Bash', 'PowerShell'],
	Frontend: ['Vue', 'Svelte', 'SCSS'],
	'UI Frameworks': ['Tailwind CSS', 'shadcn/ui', 'Material Design 3'],
	Design: ['Figma', 'Inkscape'],
	Backend: ['Docker', 'ElysiaJS', 'Vercel Serverless Functions'],
	'Build tools': ['Vite', 'Bun', 'Gulp', 'Webpack'],
	Testing: ['Bun', 'Vitest', 'Jest'],
	'CI/CD': ['GitHub Actions'],
	Databases: ['SQLite', 'PostgreSQL'],
} as const satisfies { [key: string]: string[] }
