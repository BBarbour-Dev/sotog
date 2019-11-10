<template>
  <div
    class="overlay"
    :class="{ 'overlay-open': modalOpen }"
    @click="$emit('toggle-modal', 0)"
  >
    <figure>
      <img
        :src="galleryImages[modalIndex].image.asset.url"
        :alt="galleryImages[modalIndex].name"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: "image-modal",
  props: ["galleryImages", "modal-index", "modal-open"]
};
</script>

<style scoped>
.overlay {
  position: fixed;
  background: var(--panel-background);
  color: var(--primary-color);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  transition: opacity 0.15s, visbility, 0.15s;
  overflow: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay-open {
  visibility: visible;
}

figure {
  max-width: 95vh;
}

img {
  width: 100%;
  height: auto;
  opacity: 1;
  display: block;
}
</style>