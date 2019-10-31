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
  for (let i = 0; i < 20; i += 1) {
    updates.push({
      title: `Test Update ${i + 1}`,
      author: { name: 'KJ Sylva' },
      publishedAt: `2019-10-31T04:00:00.000Z`,
      body: JSON.parse(`[
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
    ]`)
    });
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
