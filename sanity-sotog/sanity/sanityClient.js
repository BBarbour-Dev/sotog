import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.sanityProjectId,
  dataset: process.env.sanityDataset,
  token: '',
  useCdn: false
});

export default client;
