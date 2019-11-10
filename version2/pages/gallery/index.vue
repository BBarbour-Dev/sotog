<template>
  <div class="container">
    <h1>Gallery</h1>
    <section class="gallery">
      <thumbnail
        v-for="(galleryItem, index) in galleryImages"
        :key="galleryItem._id + index"
        :url="galleryItem.image.asset.url"
        :alt-text="galleryItem.name"
        :description="galleryItem.imageDescription"
        :index="index"
        v-on:toggle-modal="toggleModal"
      />
    </section>
    <image-modal
      :gallery-images="galleryImages"
      :modal-index="modalIndex"
      :modal-open="modalOpen"
      v-on:toggle-modal="toggleModal"
    />
    <pagination :all-content="allGalleryImages" />
  </div>
</template>

<script>
import pagination from "../../components/utility/pagination.vue";
import thumbnail from "../../components/gallery/thumbnail.vue";
import imageModal from "../../components/gallery/image-modal.vue";
export default {
  head() {
    return {
      title: this.pageTitle
    };
  },
  components: {
    pagination,
    thumbnail,
    imageModal
  },
  asyncData({ params, payload, store }) {
    const galleryIndex = 0;
    if (payload) {
      return {
        allGalleryImages: payload.allGalleryImages,
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
  },
  data: function() {
    return {
      modalOpen: false,
      modalIndex: 0
    };
  },
  methods: {
    toggleModal(imageIndex) {
      this.modalOpen = !this.modalOpen;
      this.modalIndex = imageIndex;
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 500px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: auto;
    grid-column-gap: 1rem;
  }
}
</style>