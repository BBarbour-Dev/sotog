<template>
  <div class="container">
    <h1>Updates</h1>
    <div class="updates">
      <update-card
        v-for="update in updates"
        :key="update._id"
        :update="update"
        :sanity-config="sanityConfig"
      ></update-card>
    </div>
    <pagination :all-content="allUpdates" />
  </div>
</template>

<script>
import pagination from "../../components/utility/pagination.vue";
import updateCard from "../../components/updates/update-card";

export default {
  components: {
    updateCard,
    pagination
  },
  head() {
    return {
      title: this.pageTitle
    };
  },
  async asyncData({ params, payload, store, error }) {
    try {
      const updatesIndex = params.page.toString() - 1;
      if (payload) {
        return {
          allUpdates: payload.allUpdates,
          updatesIndex: updatesIndex,
          updates: payload.updates,
          pageTitle: payload.pageTitle,
          sanityConfig: store.state.sanityConfig
        };
      } else {
        return {
          allUpdates: store.state.allUpdates,
          updatesIndex: updatesIndex,
          updates: store.state.allUpdates[updatesIndex].updates,
          pageTitle: store.state.allUpdates[updatesIndex].pageTitle,
          sanityConfig: store.state.sanityConfig
        };
      }
    } catch (e) {
      error({ statusCode: 404, message: "Not found." });
    }
  }
};
</script>

<style scoped>
article:not(:last-child) {
  margin-bottom: 2rem;
}
</style>