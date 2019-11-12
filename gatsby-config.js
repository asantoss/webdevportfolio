require(`dotenv`).config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		siteTitleAlt: `Alexander Santos Santana`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
				stylesProvider: {
					injectFirst: true
				}
			}
		},
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			options: {}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_ID
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Alexander Santos Full stack WebDev`,
				short_name: `Alex`,
				description: `A development portfolio to showcase my work and highlight my skill.`,
				start_url: `/`,
				background_color: `#141821`,
				theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`
	]
};
