import client from '../sanity/sanityClient';

export const state = () => ({
  allPosts: [],
  sanityConfig: {
    projectId: process.env.sanityProjectId,
    dataset: process.env.sanityDataset
  }
});

export const mutations = {
  addPosts(state, posts) {
    state.allPosts = posts;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('addPosts', await fetchPosts());
  }
};

async function fetchPosts() {
  const query = `*[_type == 'post'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(_publishedAt desc)`;
  return await client.fetch(query);
}
