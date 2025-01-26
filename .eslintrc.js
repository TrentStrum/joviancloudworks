module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
