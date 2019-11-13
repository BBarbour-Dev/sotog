import client from '../sanity/sanityClient';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const state = () => ({
  allUpdates: [],
  allChapters: [],
  allGalleryImages: [],
  authorInfo: [],
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
  },
  addGalleryImages(state, galleryImages) {
    state.allGalleryImages = galleryImages;
  },
  addAuthorInfo(state, authorInfo) {
    state.authorInfo = authorInfo;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('addUpdates', await fetchUpdates());
    commit('addChapters', await fetchChapters());
    commit('addGalleryImages', await fetchGalleryImages());
    commit('addAuthorInfo', await fetchAuthorInfo());
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
      pageTitle: index === 0 ? 'Updates' : `Updates: Page ${index + 1}`
    };
  });
}

async function fetchChapters() {
  const query = `*[_type == 'chapter']{title, description, publishedAt, docUrl, coverImage{asset->{url}}, pages[]{asset->{url}}} | order(publishedAt desc)`;
  const chapters = await client.fetch(query);
  chapters.forEach(chapter => {
    chapter.publishedAt = formatDistanceToNow(
      Date.parse(chapter.publishedAt),
      Date.now()
    );
  });
  const pages = chunk(chapters, 5);
  return pages.map((pageData, index) => {
    return {
      chapters: pageData,
      pageTitle: index === 0 ? 'Chapters' : `Chapters: Page ${index + 1}`
    };
  });
}

async function fetchGalleryImages() {
  const query = `*[_type == 'galleryImage']{_id, _updatedAt, image{asset->{url}}, imageDescription, name} | order(_updatedAt desc)`;
  const gallery = await client.fetch(query);
  const pages = chunk(gallery, 12);
  return pages.map((pageData, index) => {
    return {
      galleryImages: pageData,
      pageTitle: index === 0 ? 'Gallery' : `Gallery: Page ${index + 1}`
    };
  });
}

async function fetchAuthorInfo() {
  const query = `*[_type == 'author']{aboutComic, bio, name, image{asset->{url}}}`;
  const author = await client.fetch(query);
  return [...author];
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
