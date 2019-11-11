<template>
  <div class="container">
    <h1>Saga of the Old Gods</h1>
    <h2>Latest Chapter</h2>
    <chapter-card :chapter="this.allChapters[0].chapters[0]" />
    <div class="button-row">
      <button class="button">
        <nuxt-link to="/chapters">More Chapters...</nuxt-link>
      </button>
    </div>
    <h2>Latest Update</h2>
    <update-card
      :update="this.allUpdates[0].updates[0]"
      :sanity-config="sanityConfig"
    />
    <div class="button-row">
      <button class="button">
        <nuxt-link to="/updates">All Updates...</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import chapterCard from "../components/chapters/chapter-card.vue";
import updateCard from "../components/updates/update-card.vue";
export default {
  head() {
    return {
      title: "Home"
    };
  },
  components: {
    chapterCard,
    updateCard
  },
  computed: {
    ...mapState(["allChapters", "allUpdates", "sanityConfig"])
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 5rem;
}
h2 {
  margin-bottom: 1rem;
  font-family: var(--secondary-font);
  text-transform: uppercase;
}
.button-row {
  margin: 1rem 0 5rem 0;
  text-align: center;
}
</style>
