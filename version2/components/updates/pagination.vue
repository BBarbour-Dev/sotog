<template>
  <div class="pagination">
    <h3>Pages</h3>
    <ul>
      <li v-if="pathIndex > 1">
        <nuxt-link :to="`/updates/${pathIndex - 1}`">Prev</nuxt-link>
      </li>
      <li v-else>
        <span class="grayed">Prev</span>
      </li>
      <li v-for="(page, index) in allUpdates" :key="`Page ${index + 1}`">
        <span v-if="(index + 1) == pathIndex">
          <strong>{{index + 1}}</strong>
        </span>
        <span v-else>
          <nuxt-link :to="`/updates/${index + 1}`">{{index + 1}}</nuxt-link>
        </span>
      </li>
      <li v-if="pathIndex < allUpdates.length">
        <nuxt-link :to="`/updates/${pathIndex + 1}`">Next</nuxt-link>
      </li>
      <li v-else>
        <span class="grayed">Next</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "pagination",
  data: function() {
    return {
      pathIndex: parseInt(this.$route.params.page)
    };
  },
  computed: {
    ...mapState(["allUpdates"])
  }
};
</script>

<style scoped>
.pagination {
  text-align: center;
}

h3 {
  color: var(--secondary-color);
  font-weight: 700;
  margin-bottom: 10px;
}

ul {
  margin-left: 1rem;
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

strong {
  color: var(--secondary-color);
}
</style>