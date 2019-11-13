<template>
  <div class="container">
    <h1>About</h1>
    <h2>Story Synopsis</h2>
    <block-content
      className="content"
      :blocks="author.aboutComic"
      :projectId="sanityConfig.projectId"
      :dataset="sanityConfig.dataset"
    />
    <h2>{{ author.name }}</h2>
    <div class="about-image">
      <thumbnail
        :url="author.image.asset.url"
        :alt-text="author.name"
        :description="''"
        :index="modalIndex"
        v-on:toggle-modal="toggleModal"
      />
    </div>
    <image-modal
      :gallery-images="pageImages"
      :modal-index="modalIndex"
      :modal-open="modalOpen"
      v-on:toggle-modal="toggleModal"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BlockContent from 'sanity-blocks-vue-component';
import thumbnail from '../../components/gallery/thumbnail.vue';
import imageModal from '../../components/gallery/image-modal.vue';
export default {
  head() {
    return {
      title: 'About'
    };
  },
  components: {
    BlockContent,
    thumbnail,
    imageModal
  },
  data: function() {
    return {
      modalOpen: false,
      modalIndex: 0
    };
  },
  computed: {
    ...mapState(['authorInfo', 'sanityConfig']),
    author: function() {
      return this.authorInfo[0];
    },
    pageImages: function() {
      return new Array(this.authorInfo[0]);
    }
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
h2 {
  margin-bottom: 1rem;
  font-family: var(--secondary-font);
  text-transform: uppercase;
}

h2:not(:first-child) {
  margin-top: 1rem;
}

.content >>> img {
  max-width: 100%;
  max-height: 65vh;
}

.content >>> p {
  margin-top: 1rem;
  text-align: justify;
}

.about-image {
  width: 75%;
  margin: 0 auto;
}
</style>
