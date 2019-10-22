<template>
  <div>
    <block-content
      :blocks="post.body"
      :dataset="sanityConfig.projectId"
      :projectId="sanityConfig.dataset"
    />
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";

export default {
  components: {
    BlockContent
  },
  async asyncData({ params, payload, store }) {
    if (payload) {
      this.currentPost = payload;
    } else {
      return {
        post: store.state.postList.find(
          post => post.slug.current === params.slug
        ),
        sanityConfig: store.state.sanityConfig
      };
    }
  },
  mounted() {
    console.log(this.sanityConfig);
  }
};
</script>

<style>
</style>