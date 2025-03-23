import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';

export default [
	{
		ignores: [
			// Build outputs
			'out/**',
			'.next/**',
			'dist/**',
			'build/**',

			// Dependencies
			'node_modules/**',

			// Generated files
			'**/chunks/**',
			'**/webpack/**',
			'**/*.min.js',
			'**/*.min.ts',
			'**/generated/**',
			'**/__generated__/**',
			'**/static/**',
			'**/chunks/*.js',
			'**/chunks/*.ts',
			'**/webpack-*.js',
			'**/webpack-*.ts',
			'**/chunks/webpack-*.js',
			'**/chunks/webpack-*.ts',
			'**/_buildManifest.js',
			'**/_ssgManifest.js',
			'**/_middlewareManifest.js',

			// Cache and temporary files
			'.turbo/**',
			'coverage/**',

			// Configuration files
			'*.config.js',
			'*.config.ts',
			'next-env.d.ts',
			'postcss.config.js',
			'tailwind.config.js',

			// Static assets
			'static/**',
			'public/**',

			// Test files
			'__tests__/**',
			'test/**',
			'tests/**',

			// Next.js specific
			'**/_app.js',
			'**/_document.js',
			'**/_error.js',
			'**/_middleware.js',
			'**/api/**/*.js',
			'**/api/**/*.ts',
		],
		files: [
			'app/**/*.{js,jsx,ts,tsx}',
			'components/**/*.{js,jsx,ts,tsx}',
			'lib/**/*.{js,jsx,ts,tsx}',
			'utils/**/*.{js,jsx,ts,tsx}',
		],
		plugins: {
			'@typescript-eslint': typescript,
			react: react,
			'react-hooks': reactHooks,
			'@next/next': next,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				document: 'readonly',
				window: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly',
				self: 'readonly',
				trustedTypes: 'readonly',
			},
		},
		rules: {
			...typescript.configs.recommended.rules,
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...next.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-redeclare': 'off',
			'no-undef': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
