module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      'gatsby-tranformer-remark',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src`
        }
      }
],
}
