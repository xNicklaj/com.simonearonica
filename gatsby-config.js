module.exports = {
  siteMetadata: {
    title: `Simone Aronica`,
    description: `This is a web portfolio. Hi, I'm Simone Aronica and I'm your next-home junior developer.`,
    author: `Simone Aronica`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simone Aronica`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#F9E96A`,
        display: `minimal-ui`
      },
    },
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
