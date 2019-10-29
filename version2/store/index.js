import client from '../sanity/sanityClient';

export const state = () => ({
  allUpdates: [],
  allChapters: [],
  allGalleryImages: [],
  authorInfo: {},
  sanityConfig: {
    projectId: process.env.sanityProjectId,
    dataset: process.env.sanityDataset
  }
});

export const mutations = {
  addUpdates(state, updates) {
    state.allUpdates = updates;
  },
  addChapters(state, chapters) {
    state.allChapters = chapters;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('addUpdates', await fetchUpdates());
    commit('addChapters', await fetchChapters());
  }
};

async function fetchUpdates() {
  //const query = `*[_type == 'update'] {_id, publishedAt, slug{current}, title, body, author->{name}, body} | order(publishedAt desc)`;
  const updates = [];
  for (let i = 0; i <= 20; i += 1) {
    updates.push({ title: `Update: ${i + 1}` });
  }
  const pages = chunk(updates, 5);
  return pages.map((pageData, index) => {
    return {
      updates: pageData,
      pageTitle: `Updates: Page ${index + 1}`
    };
  });
  //return await client.fetch(query);
}

async function fetchChapters() {
  const query = `*[_type == 'chapter']{title, description, publishedAt, slug{current}, coverImage{asset->{url}}, pages[]{asset->{url}}} | order(publishedAt desc)`;
  return await client.fetch(query);
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
