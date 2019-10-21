import client from '../sanity/sanityClient';

export const state = () => ({
  postList: []
});

export const mutations = {
  addPosts(state, data) {
    state.postList = data;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const query = `*[_type == 'post'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(_publishedAt desc)`;
    try {
      const data = await client.fetch(query);
      commit('addPosts', data);
    } catch (err) {
      console.log(err);
    }
  }
};
