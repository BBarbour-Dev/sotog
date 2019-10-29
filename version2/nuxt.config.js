import dotenv from 'dotenv';
dotenv.config();

import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: '',
  useCdn: false
});

export default {
  mode: 'universal',
  env: {
    sanityProjectId: process.env.SANITY_PROJECT_ID,
    sanityDataset: process.env.SANITY_DATASET
  },
  head: {
    titleTemplate: 'Saga of the Old Gods - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://kit.fontawesome.com/523f7891a9.js',
        crssorigin: 'anonymous'
      }
    ]
  },
  loading: { color: '#fff' },
  generate: {
    routes: async () => {
      const updateRoutes = await fetchUpdates();
      return [...updateRoutes];
    }
  }
};

async function fetchUpdates() {
  //const query = `*[_type == 'update'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(_publishedAt desc)`;
  //const data = await client.fetch(query);
  const updates = [];
  for (let i = 0; i <= 20; i += 1) {
    updates.push({ title: `Update: ${i + 1}` });
  }
  const pages = chunk(updates, 5);
  const routes = pages.map((pageData, index) => {
    return {
      route: `/updates/${index + 1}`,
      payload: { updates: pageData, pageTitle: `Updates: Page ${index + 1}` }
    };
  });
  return routes;
}

function chunk(arr, size) {
  const chunks = [];
  let i = 0;
  let n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += size)));
  }
  return chunks;
}
