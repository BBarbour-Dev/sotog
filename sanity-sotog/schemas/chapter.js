export default {
  name: 'chapter',
  title: 'Chapter',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage'
    }
  }
};
