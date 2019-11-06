<template>
  <div class="pagination" v-if="allContent.length > 1">
    <h3>Page(s)</h3>
    <ul>
      <li v-if="pathIndex > 1">
        <nuxt-link :to="`/${path}${pathIndex > 2 ? '/' + pathIndex - 1 : ''}`">
          <i class="fas fa-angle-double-left"></i>
        </nuxt-link>
      </li>
      <li v-else>
        <span class="grayed">
          <i class="fas fa-angle-double-left"></i>
        </span>
      </li>
      <li v-for="(page, index) in allContent" :key="`Page ${index + 1}`">
        <span v-if="index + 1 == pathIndex">
          <strong>{{ index + 1 }}</strong>
        </span>
        <span v-else>
          <nuxt-link :to="`/${path}/${index + 1}`">{{ index + 1 }}</nuxt-link>
        </span>
      </li>
      <li v-if="pathIndex < allContent.length">
        <nuxt-link :to="`/${path}/${pathIndex + 1}`">
          <i class="fas fa-angle-double-right"></i>
        </nuxt-link>
      </li>
      <li v-else>
        <span class="grayed">
          <i class="fas fa-angle-double-right"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data: function() {
    return {
      path: this.$route.path.split("/")[1],
      pathIndex: this.$route.params.page ? parseInt(this.$route.params.page) : 1
    };
  },
  props: ["allContent"]
};
</script>

<style scoped>
.pagination {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

h3 {
  color: var(--secondary-color);
  font-weight: 700;
  margin-bottom: 1rem;
}

ul {
  padding: 0;
  display: flex;
  list-style-type: none;
}

li:not(:last-child) {
  margin-right: 1rem;
}

.grayed {
  color: var(--shade);
}
</style>