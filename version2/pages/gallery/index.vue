<template>
  <div class="container">
    <h1>Gallery</h1>
    <section class="gallery">
      <thumbnail
        v-for="galleryItem in galleryImages"
        :key="galleryItem._id"
        :url="galleryItem.image.asset.url"
        :alt-text="galleryItem.name"
        :description="galleryItem.imageDescription"
      />
    </section>
    <pagination :all-content="allGalleryImages" />
  </div>
</template>

<script>
import pagination from "../../components/utility/pagination.vue";
import thumbnail from "../../components/gallery/thumbnail.vue";
export default {
  head() {
    return {
      title: this.pageTitle
    };
  },
  components: {
    pagination,
    thumbnail
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

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
}
</style>