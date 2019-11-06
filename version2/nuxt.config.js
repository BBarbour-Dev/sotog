import dotenv from 'dotenv';
dotenv.config();

import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: '',
  useCdn: false
});

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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
  pageTransition: {
    name: 'fade'
  },
  loading: {
    color: 'rgb(255, 230, 181);',
    height: '2px'
  },
  generate: {
    routes: async () => {
      const updateRoutes = await fetchUpdates();
      console.log(updateRoutes);
      return [...updateRoutes];
    }
  }
};

async function fetchUpdates() {
  const query = `*[_type == 'update'] {_id, publishedAt, title, body, author->{name}} | order(publishedAt desc)`;
  const updates = await client.fetch(query);
  updates.forEach(update => {
    update.publishedAt = formatDistanceToNow(
      Date.parse(update.publishedAt),
      Date.now()
    );
  });
  const pages = chunk(updates, 5);
  return pages.map((pageData, index) => {
    return {
      route: index > 0 ? `/updates/${index + 1}` : '/updates',
      payload: { updates: pageData, pageTitle: `Updates: Page ${index + 1}` }
    };
  });
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
