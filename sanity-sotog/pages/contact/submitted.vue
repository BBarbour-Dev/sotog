<template>
  <div class="container">
    <h1>Contact</h1>
    <h2>Your message has been submitted, thank you!</h2>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact: Submission Success"
    };
  }
};
</script>

<style>
.container {
  text-align: center;
}
h2 {
  margin-bottom: 5rem;
}
</style>