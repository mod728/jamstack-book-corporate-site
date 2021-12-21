module.exports = {
  siteMetadata: {
    defaultTitle: `Jack of All Trades Official Site`,
    defaultDescription: `モダン開発を得意とするJack of All Tradesの公式サイトです。`,
    defaultImage: "src/image/social-card.png",
    siteUrl: "https://jamstack-book-corporate-site.netlify.app",
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qq1txxxxxy`,
        accessToken: `zzzzzzz6qDM-gDL_xxxxxxxxxxxyyyyyyyyyyy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `blog`,
          path: `${__dirname}/src/data`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
