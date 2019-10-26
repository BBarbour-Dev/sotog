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
    title: process.env.npm_package_name || '',
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
      const postRoutes = await fetchPosts();
      return [...postRoutes];
    }
  }
};

async function fetchPosts() {
  const query = `*[_type == 'post'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(_publishedAt desc)`;
  const data = await client.fetch(query);
  const routes = data.map(post => {
    return {
      route: `/post/${post.slug.current}`,
      payload: post
    };
  });
  return routes;
}
