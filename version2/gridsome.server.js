// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(store => {
    store.addMetadata('sanityOptions', {
      projectId: process.env.GRIDSOME_SANITY_PROJECT_ID,
      dataset: process.env.GRIDSOME_SANITY_DATASET
    });
  });
};
