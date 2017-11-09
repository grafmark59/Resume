module.exports = {
  pathPrefix: `/Resume`,
  siteMetadata: {
    title: `Daniel Graf Resume 2017`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
