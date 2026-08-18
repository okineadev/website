export type LanguageProficiencyLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native'

type LanguageProficiency = {
	[key: string]: LanguageProficiencyLevel
}

export default {
	Ukrainian: 'Native',
	Polish: 'B2',
	English: 'B1',
} as const satisfies LanguageProficiency
