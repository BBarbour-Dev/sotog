import client from '../sanity/sanityClient';

export const state = () => ({
  allPosts: [],
  allChapters: [],
  allGalleryImages: [],
  authorInfo: {},
  sanityConfig: {
    projectId: process.env.sanityProjectId,
    dataset: process.env.sanityDataset
  }
});

export const mutations = {
  addPosts(state, posts) {
    state.allPosts = posts;
  },
  addChapters(state, chapters) {
    state.allChapters = chapters;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('addPosts', await fetchPosts());
    commit('addChapters', await fetchChapters());
  }
};

async function fetchPosts() {
  const query = `*[_type == 'post'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(publishedAt desc)`;
  return await client.fetch(query);
}

async function fetchChapters() {
  const query = `*[_type == 'chapter']{title, description, publishedAt, slug{current}, coverImage{asset->{url}}, pages[]{asset->{url}}} | order(publishedAt desc)`;
  return await client.fetch(query);
}
