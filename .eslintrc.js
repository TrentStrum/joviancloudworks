module.exports = {
	extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-var-requires': [
			'error',
			{
				allow: ['tailwindcss-animate'],
			},
		],
	},
	root: true,
};
