import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: {
					light: '#f3f4f6',
					dark: '#1a202c',
				},
				text: {
					light: '#1f2937', // grå-800
					dark: '#f3f4f6', // grå-100
				},
				accent: {
					DEFAULT: '#facc15', // yellow-400
					hover: '#eab308', // yellow-500
				},
			},
			fontFamily: {
				light: ['Roboto', ...defaultTheme.fontFamily.sans],
				dark: ['Fira Code', 'Source Code Pro', 'Courier New', 'monospace'],
			},
			keyframes: {
				lifestream: {
					'0%': { 'background-position': '0% 0%' },
					'100%': { 'background-position': '200% 100%' },
				},
			},
			animation: {
				lifestream: 'lifestream 10s linear infinite',
			},
		},
	},
	plugins: [],
};
