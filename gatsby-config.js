module.exports = {
siteMetadata: {
    title: 'Gatsby Default Starter',
},
plugins: [
  'gatsby-plugin-netlify-cms',
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    }
  }
],
}