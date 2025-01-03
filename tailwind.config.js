/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: {
					DEFAULT: 'hsl(var(--background))',
					darker: 'hsl(var(--background-darker))'
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					darker: 'hsl(var(--primary-darker))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			// Add custom easing functions
			transitionTimingFunction: {
				'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // A bouncy elastic effect
				'elastic-1': 'cubic-bezier(0.37, 0, 0.63, 1)', // A smoother elastic effect
				'elastic-2': 'cubic-bezier(0.11, 0, 0.5, 0)', // A quick start, slow end elastic
				'elastic-3': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)', // A slow start, quick end elastic
				'elastic-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // A natural bouncy out effect
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}