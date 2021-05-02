module.exports = {
  siteMetadata: {
    title: 'my-gatsby-site',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-2GKX3NZ3W0'],
      },
    },
  ],
};
