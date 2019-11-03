<template>
  <div class="container">
    <h1>Chapters</h1>
    <chapter-card
      v-for="chapter in latestChapters"
      :key="chapter._id"
      :chapter="chapter"
    />
  </div>
</template>

<script>
import chapterCard from "../components/chapters/chapter-card.vue";
export default {
  head() {
    return {
      title: "Chapters"
    };
  },
  components: {
    chapterCard
  },
  asyncData({ store }) {
    return {
      latestChapters: store.state.allChapters
    };
  }
};
</script>

<style scoped>
section:not(:last-child) {
  margin-bottom: 2rem;
}
</style>