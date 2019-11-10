<template>
  <figure>
    <img :src="url" :alt="altText" v-on:click="$emit('toggle-modal', index)" />
    <figcaption>{{ description }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "thumbnail",
  props: ["url", "alt-text", "description", "index"]
};
</script>

<style scoped>
figure {
  width: 100%;
}

img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  margin: 1rem 0;
}

figcaption {
  text-align: center;
}
</style>