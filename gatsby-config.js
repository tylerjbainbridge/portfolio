module.exports = {
  siteMetadata: {
    title: 'Tyler Bainbridge',
    description: 'Full Stack Software Engineer living in Boston, MA.',
    url: 'https://www.tylerbainbridge.com',
    image: '/images/me_jumping.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@tjbainbridge',
    author: 'Tyler Bainbridge',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['/old/**'] },
    },
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isResettingCSS: true,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-68674418-2',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
