<template>
  <figure>
    <img :src="url" :alt="altText" />
    <figcaption>{{ description }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "thumbnail",
  props: ["url", "alt-text", "description"]
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>