<template>
  <div class="container">
    <h1>Updates</h1>
    <div
      class="update"
      v-for="(update, index) in updates"
      :key="`Update #${index + 1}`"
    >
      <update-card :update="update" :sanity-config="sanityConfig"></update-card>
    </div>
    <pagination />
  </div>
</template>

<script>
import pagination from "../../components/updates/pagination.vue";
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
  async asyncData({ params, payload, store }) {
    const updatesIndex = params.page.toString() - 1;
    if (payload) {
      return {
        updatesIndex: updatesIndex,
        updates: payload.updates,
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
.update >>> article:last-child {
  margin-bottom: 2rem;
}
</style>