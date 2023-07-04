module.exports = {
	content: ['./**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			colors: {
				primary: '#8b5cf6',
        secondary: '#22c55e',
        dark: '#121212',
			},
			screens: {
				'2xl': '1320px',
			},
		},
	},
	plugins: [],
};
