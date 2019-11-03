import client from '../sanity/sanityClient';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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
      updates: pageData,
      pageTitle: `Updates: Page ${index + 1}`
    };
  });
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
