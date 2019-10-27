<template>
  <div class="container">
    <h1>Saga of the Old Gods</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["allPosts", "allChapters"])
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

h1 {
  color: var(--secondary-color);
  font-family: var(--secondary-font);
  margin-top: 3rem;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
}
</style>
