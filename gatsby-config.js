module.exports = {
  siteMetadata: {
    title: "Birkir Freyr",
    author: "Birkir Freyr Baldursson",
    description: "Web developer"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-MXN9G3K",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114145402-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
