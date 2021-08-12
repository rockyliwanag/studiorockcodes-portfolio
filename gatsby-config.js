module.exports = {
  siteMetadata: {
    title: 'StudioRock - Portfolio',
    author: 'Rocky Liwanag',
    description: 'A Portfolio for StudioRockCodes',
  },
  pathPrefix: '',
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-page-transitions',
    //   options: {
    //     transitionTime: 500
    //   }
    // },
    'gatsby-plugin-page-transitions',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
