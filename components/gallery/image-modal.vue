<template>
  <div
    class="overlay"
    :class="{ 'overlay-open': modalOpen }"
    @click="$emit('toggle-modal', 0)"
  >
    <div class="modal-close">
      <button>
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="content">
      <figure>
        <img
          :src="galleryImages[modalIndex].image.asset.url"
          :alt="galleryImages[modalIndex].name"
        />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-modal',
  props: ['galleryImages', 'modal-index', 'modal-open']
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
  overflow: auto;
  visibility: hidden;
  transition: opacity 0.15s, visbility, 0.15s;
  z-index: 100;
}

.modal-close button {
  display: block;
  position: fixed;
  right: 2rem;
  top: 0.5rem;
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 3rem;
}

.content {
  margin: auto;
  padding: 3rem;
  display: block;
  width: 80%;
}

.overlay-open {
  visibility: visible;
}

figure {
  max-height: 100%;
}

img {
  width: 100%;
  height: auto;
  opacity: 1;
  display: block;
}
</style>
