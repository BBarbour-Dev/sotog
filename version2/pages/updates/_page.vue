<template>
  <div class="container">
    <h1>Updates</h1>
    <article v-for="(update, index) in updates" :key="`Update #${index + 1}`">
      <h2>{{ update.title }}</h2>
      <p class="timestamp">
        <strong>Posted: </strong>
        <em>{{ update.publishedAt }} ago</em>
      </p>
      <block-content
        className="content"
        :blocks="update.body"
        :projectId="sanityConfig.projectId"
        :dataset="sanityConfig.dataset"
      />
      <p class="author">- {{ update.author.name }}</p>
    </article>
    <pagination></pagination>
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import pagination from "../../components/updates/pagination.vue";

export default {
  components: {
    BlockContent,
    pagination
  },
  head() {
    return {
      title: this.pageTitle
    };
  },
  async asyncData({ params, payload, store }) {
    const updatesIndex = params.page.toString() - 1;
    if (payload) {
      return {
        currentPage: params.page,
        pageTitle: payload.pageTitle,
        sanityConfig: store.state.sanityConfig
      };
    } else {
      return {
        updatesIndex: updatesIndex,
        updates: store.state.allUpdates[updatesIndex].updates,
        pageTitle: store.state.allUpdates[updatesIndex].pageTitle,
        sanityConfig: store.state.sanityConfig
      };
    }
  }
};
</script>

<style scoped>
article {
  margin-bottom: 2rem;
  background: var(--panel-background);
  padding: 2rem;
  border-radius: 0.5rem;
}

h2 {
  color: var(--dim);
  font-family: var(--secondary-font);
  border-bottom: 1px solid var(--dim);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.timestamp {
  color: var(--dim);
  text-align: right;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.author {
  text-align: center;
  color: var(--secondary-color);
  margin-top: 1rem;
}

.content >>> img {
  max-width: 300px;
}

.content >>> p {
  margin-top: 1rem;
  text-align: justify;
}

@media (min-width: 1000px) {
  article {
  }
  .content >>> img {
    max-width: 450px;
  }
}
</style>