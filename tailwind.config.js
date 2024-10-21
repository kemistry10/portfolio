/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {

		colors: {
			"color-1": "hsl(var(--color-1))",
			"color-2": "hsl(var(--color-2))",
			"color-3": "hsl(var(--color-3))",
			"color-4": "hsl(var(--color-4))",
			"color-5": "hsl(var(--color-5))",
		  },
		  

  		animation: {
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			shimmer: 'shimmer 8s infinite',
			gradient: "gradient 8s linear infinite",
			"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			"shimmer-slide":
			"shimmer-slide var(--speed) ease-in-out infinite alternate",
			"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
			rainbow: "rainbow var(--speed, 2s) infinite linear",

  		},
  		keyframes: {
			keyframes: {
			
				"spin-around": {
				"0%": {
					transform: "translateZ(0) rotate(0)",
				},
				"15%, 35%": {
					transform: "translateZ(0) rotate(90deg)",
				},
				"65%, 85%": {
					transform: "translateZ(0) rotate(270deg)",
				},
				"100%": {
					transform: "translateZ(0) rotate(360deg)",
				},
				},
				"shimmer-slide": {
				to: {
					transform: "translate(calc(100cqw - 100%), 0)",
				},
				},
				

				gradient: {
				to: {
				backgroundPosition: "var(--bg-size) 0",
				},
				},
			},
  				shimmer: {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shimmer-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shimmer-width)) 0'
  				}
				},
  				orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  				},
				"border-beam": {
				"100%": {
				"offset-distance": "100%",
				},
				},
				rainbow: {
				"0%": { "background-position": "0%" },
				"100%": { "background-position": "200%" },
				},
		},

  	}
  },
  plugins: [require("tailwindcss-animate")],
}


