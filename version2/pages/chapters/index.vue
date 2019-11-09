<template>
  <div class="container">
    <h1>Chapters</h1>
    <chapter-card
      v-for="chapter in chapters"
      :key="chapter._id"
      :chapter="chapter"
    />
    <pagination :all-content="allChapters" />
  </div>
</template>

<script>
import chapterCard from "../../components/chapters/chapter-card";
import pagination from "../../components/utility/pagination.vue";
export default {
  head() {
    return {
      title: this.pageTitle
    };
  },
  components: {
    chapterCard,
    pagination
  },
  asyncData({ params, payload, store }) {
    const chaptersIndex = 0;
    if (payload) {
      return {
        chaptersIndex: chaptersIndex,
        chapters: payload.chapters,
        pageTitle: payload.pageTitle
      };
    } else {
      return {
        allChapters: store.state.allChapters,
        chaptersIndex: chaptersIndex,
        chapters: store.state.allChapters[chaptersIndex].chapters,
        pageTitle: store.state.allChapters[chaptersIndex].pageTitle
      };
    }
  }
};
</script>

<style scoped>
section:not(:last-child) {
  margin-bottom: 2rem;
}
</style>