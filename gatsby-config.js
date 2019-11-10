module.exports = {
  siteMetadata: {
    title: `Home`,
    description: `This is a web portfolio. Hi, I'm Simone Aronica and I'm your friendly neighbourhood junior developer.`,
    author: `Simone Aronica`,
    twitterUsername: '@itssimondev',
    titleTemplate: '%s | Simone Aronica',
    url: 'https://simonearonica.com',
    image: '/images/seo.jpg'
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
        display: `minimal-ui`,
        icon: 'src/favicon.png'
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.simonearonica.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
