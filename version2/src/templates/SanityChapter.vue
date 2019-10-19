<template>
  <div>
    <h1>Test</h1>
    <img
      :src="$urlForImage($page.chapter.coverImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
      alt="Cover Image"
    />
  </div>
</template>

<page-query>
query ($id: ID!){
    metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  chapter: sanityChapter (id: $id)  {
    slug {
      current
    }
    title,
    coverImage {
      asset {
        url
      }
    }
    description,
    publishedAt,
    pages {
      asset {
        url
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style>
</style>