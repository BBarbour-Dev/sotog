// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Saga of the Old Gods',
  siteDescription: `After experiencing a prophecy dream about war and destruction, Brie seeks out the truth behind them only to find out that there are far more details about her existence and who she truly is than she could have ever imagined.`,
  templates: {
    SanityPost: '/post/:slug__current',
    SanityChapter: '/chapter/:slug__current'
  },
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: process.env.GRIDSOME_SANITY_PROJECT_ID,
        dataset: process.env.GRIDSOME_SANITY_DATASET,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: false,
        watchMode: false
      }
    }
  ]
};
