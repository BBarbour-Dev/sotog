// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

console.log(process.env.SANITY_PROJECT_ID);

module.exports = {
  siteName: 'Saga of the Old Gods',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATA_SET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: false,
        watchMode: false
      }
    }
  ]
};
