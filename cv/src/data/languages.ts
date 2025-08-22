type LanguageProficiencyLevel = 'Native' | 'Fluent' | 'Conversational' | 'Basic' | '1B'

type LanguageEntry = {
	[key: string]: LanguageProficiencyLevel
}

type LanguageProficiency = LanguageEntry

const languages: LanguageProficiency = {
	Ukrainian: 'Native',
	English: '1B',
}

export default languages
