<template>
  <div class="container">
    <h1>Gallery</h1>
    <div v-for="image in galleryImages" :key="image._id">
      <h2>{{ image.name }}</h2>
    </div>
    <pagination :all-content="allGalleryImages" />
  </div>
</template>

<script>
import pagination from "../../components/utility/pagination.vue";
export default {
  head() {
    return {
      title: this.pageTitle
    };
  },
  components: {
    pagination
  },
  asyncData({ params, payload, store }) {
    const galleryIndex = 0;
    if (payload) {
      return {
        galleryIndex: galleryIndex,
        galleryImages: payload.galleryImages,
        pageTitle: payload.pageTitle
      };
    } else {
      return {
        allGalleryImages: store.state.allGalleryImages,
        galleryIndex: galleryIndex,
        galleryImages: store.state.allGalleryImages[galleryIndex].galleryImages,
        pageTitle: store.state.allGalleryImages[galleryIndex].pageTitle
      };
    }
  }
};
</script>

<style>
</style>