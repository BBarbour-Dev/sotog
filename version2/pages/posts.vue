<template>
  <div class="container">
    <h1>Posts</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Posts"
    };
  },
  computed: {
    ...mapState(["allPosts"])
  }
};
</script>

<style>
</style>
