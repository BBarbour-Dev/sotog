<template>
  <article>
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
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";

export default {
  name: "update-card",
  components: {
    BlockContent
  },
  props: ["update", "sanityConfig"]
};
</script>

<style scoped>
article {
  background: var(--panel-background);
  padding: 2rem;
  border-radius: 0.5rem;
}

h2 {
  color: var(--secondary-color);
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
  max-width: 100%;
  max-height: 65vh;
}

.content >>> p {
  margin-top: 1rem;
  text-align: justify;
}

@media (min-width: 1000px) {
  /* .content >>> img {
    max-width: 100%;
  } */
}
</style>