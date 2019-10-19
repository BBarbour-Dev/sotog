<template>
  <h1>{{$page.post.title}}</h1>
</template>

<page-query>
query ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  post: sanityPost(id: $id) {
    slug {
      current
    }
    title
    author {
      name
    }
  	publishedAt
    mainImage {
      asset {
        url
      }
    }
    _rawBody
  }
}
</page-query>

<script>
export default {};
</script>

<style>
</style>