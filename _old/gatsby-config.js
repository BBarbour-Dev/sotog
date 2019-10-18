module.exports = {
  siteMetadata: {
    title: `Saga of the Old Gods`,
    description: `Brie's story, as she learns the secrets of her past and the influence of the Old Gods on the world.`,
    author: `KJ Sylva`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
            option: {
              name: `assets`,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {},
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "chapters",
        path: `${__dirname}/content/chapters`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify",
  ],
}
