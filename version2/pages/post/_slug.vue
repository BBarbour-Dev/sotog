<template>
  <div>
    <block-content
      :blocks="post.body"
      :projectId="sanityConfig.projectId"
      :dataset="sanityConfig.dataset"
    />
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";

export default {
  head() {
    return {
      title: `${this.post.title}`
    };
  },
  components: {
    BlockContent
  },
  async asyncData({ params, payload, store }) {
    if (payload) {
      return {
        post: payload,
        sanityConfig: store.state.sanityConfig
      };
    } else {
      return {
        post: store.state.allPosts.find(
          post => post.slug.current === params.slug
        ),
        sanityConfig: store.state.sanityConfig
      };
    }
  }
};
</script>

<style>
</style>