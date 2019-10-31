<template>
  <div class="container">
    <h1>Updates</h1>
    <article v-for="(update, index) in updates" :key="`Update #${index + 1}`">
      <h2>{{update.title}}</h2>
      <!-- prettier-ignore -->
      <block-content
        class="content"
        :blocks="update.body"
        :projectId="sanityConfig.projectId"
        :dataset="sanityConfig.dataset"
      />

      <hr />
    </article>
    <pagination></pagination>
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import pagination from "../../components/updates/pagination.vue";

export default {
  components: {
    BlockContent,
    pagination
  },
  head() {
    return {
      title: this.pageTitle
    };
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

<style scoped>
article {
  margin-bottom: 2rem;
}

h2 {
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

block-content >>> img {
  max-width: 300px;
  display: block;
  margin: 1rem 0;
}
</style>