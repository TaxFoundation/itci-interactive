module.exports = {
  siteMetadata: {
    title: `International Tax Competitiveness Index`,
    description: `The International Tax Competitiveness Index (ITCI) seeks to measure the extent to which a country’s tax system adheres to two important aspects of tax policy: competitiveness and neutrality.`,
    author: `@taxfoundation`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
        name: `International Tax Competitiveness Index`,
        short_name: `ITCI`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0094ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:400,400i,700'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
