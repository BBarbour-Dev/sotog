import dotenv from 'dotenv';
import client from '@sanity/client';
console.log(client);
dotenv.config();

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  generate: {
    routes: () => {
      const routes = [];
      const creatPostRoutes = async () => {
        const query = `*[_type == 'post'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(_publishedAt desc)`;
        try {
          const data = await client.fetch(query);
          const postRoutes = data.map(post => {
            return {
              route: `/post/${post.slug.current}`,
              payload: post
            };
          });
          routes = [...routes, postRoutes];
        } catch (err) {
          console.log(err);
        }
      };
      return routes;
    }
  }
};
