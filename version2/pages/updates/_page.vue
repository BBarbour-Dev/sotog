<template>
  <div class="container">
    <h1 v-for="(update, index) in updates" :key="`Update #${index + 1}`">{{update.title}}</h1>
    <!-- <block-content
      :blocks="post.body"
      :projectId="sanityConfig.projectId"
      :dataset="sanityConfig.dataset"
    />-->
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";

export default {
  head() {
    return {
      title: this.pageTitle
    };
  },
  components: {
    BlockContent
  },
  async asyncData({ params, payload, store }) {
    const updatesIndex = params.page.toString() - 1;
    if (payload) {
      return {
        currentPage: params.page,
        pageTitle: payload.pageTitle,
        sanityConfig: store.state.sanityConfig
      };
    } else {
      return {
        updatesIndex: updatesIndex,
        updates: store.state.allUpdates[updatesIndex].updates,
        pageTitle: store.state.allUpdates[updatesIndex].pageTitle,
        sanityConfig: store.state.sanityConfig
      };
    }
  }
};
</script>

<style>
</style>