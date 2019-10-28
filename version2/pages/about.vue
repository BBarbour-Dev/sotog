<template>
  <div class="container">
    <h1>About</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "About"
    };
  },
  computed: {
    ...mapState(["authorInfo"])
  }
};
</script>

<style>
</style>