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
  //const query = `*[_type == 'update'] {_id, publishedAt, title, body, author->{name}} | order(_publishedAt desc)`;
  //const data = await client.fetch(query);
  const updates = [];
  for (let i = 0; i < 20; i += 1) {
    updates.push({
      title: `Test Update ${i + 1}`,
      author: { name: 'KJ Sylva' },
      publishedAt: `2019-10-31T04:00:00.000Z`,
      body: JSON.parase(`{"body": [
      {
        "_key": "4a89dd6ae01e",
        "_type": "block",
        "children": [
          {
            "_key": "4a89dd6ae01e0",
            "_type": "span",
            "marks": [],
            "text": "This is a test update."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "121107172168",
        "_type": "image",
        "asset": {
          "_ref": "image-3e103f0f7f0f3398563e06c61408d05abd8442ef-374x374-jpg",
          "_type": "reference"
        }
      }
    ]}`)
    });
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
