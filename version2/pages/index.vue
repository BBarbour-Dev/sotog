<template>
  <div class="container">
    <h1>Home</h1>
    <ul>
      <li v-for="post in allPosts" :key="post._id">
        <span>
          {{post.title}} |
          <nuxt-link :to="`/post/${post.slug.current}`">Read More</nuxt-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["allPosts"])
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
