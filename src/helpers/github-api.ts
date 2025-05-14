/**
 * Fetches the number of stars for a given GitHub repository.
 * @param repo - The repository in the format "username/repo".
 * @returns The number of stars the repository has.
 */
export async function fetchGitHubStars(repo: string): Promise<number> {
	try {
		// https://ungh.cc - 🐙 Unlimited access to GitHub API
		const response = await fetch(`https://ungh.cc/stars/${repo}`, {
			headers: {
				'User-Agent': 'A script that loads the number of stars from the repositories on the https://okinea.dev website',
			},
		})
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		return data.totalStars
	} catch (error) {
		console.error(`Failed to fetch stars for repo: ${repo}`, error)
		return 0 // Return 0 stars in case of an error
	}
}
