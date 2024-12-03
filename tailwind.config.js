/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				facebook: "linear-gradient(to bottom, #00a9f5, #005bb5)",
				whatsapp: "linear-gradient(to bottom, #42ec61, #17c83d)",
				instagram:
					"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
				bannerImage: 'url("/src/images/index/background.webp")',
				gradientOverlay:
					"linear-gradient(to bottom, rgba(8, 51, 68, 0) 0%, rgba(8, 51, 68, 1) 100%)",
				gradientOverlayLg:
					"linear-gradient(to bottom, rgba(8, 51, 68, 0) 0%, rgba(8, 51, 68, 1) 50%, rgba(8, 51, 68, 1) 100%)",
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
