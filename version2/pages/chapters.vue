<template>
  <div class="container">
    <h1>Chapters</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Chapters"
    };
  },
  computed: {
    ...mapState(["allChapters"])
  }
};
</script>

<style>
</style>