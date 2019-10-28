<template>
  <div class="container">
    <h1>Gallery</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Gallery"
    };
  },
  computed: {
    ...mapState(["allGalleryImages"])
  }
};
</script>

<style>
</style>