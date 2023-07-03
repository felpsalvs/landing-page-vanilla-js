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
				primary: '#4ade80',
        secondary: '#a78bfa',
        dark: '#2e1065',
			},
			screens: {
				'2xl': '1320px',
			},
		},
	},
	plugins: [],
};
