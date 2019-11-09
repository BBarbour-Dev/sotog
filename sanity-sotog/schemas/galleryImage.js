export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Image Name',
      type: 'string'
    },
    {
      name: 'imageDescription',
      title: 'Image Description',
      type: 'string'
    },
    {
      name: 'image',
      title: 'image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};
