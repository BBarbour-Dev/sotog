<template>
  <section>
    <figure>
      <img :src="chapter.coverImage.asset.url" :alt="chapter.title" />
    </figure>
    <div class="chapter-info">
      <h2>{{ chapter.title }}</h2>
      <p class="timestamp">
        <strong>Published:</strong>
        <em>{{ chapter.publishedAt }} ago</em>
      </p>
      <p class="description">{{ chapter.description }}</p>
      <div class="button-row">
        <button class="button">
          <a :href="chapter.docUrl" target="_blank" rel="noopener noreferrer"
            >Read Chapter</a
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "chapter-card",
  props: ["chapter"]
};
</script>

<style scoped>
section {
  background: var(--panel-background);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}

img {
  max-width: 100%;
  margin-bottom: 2rem;
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
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.chapter-info {
  flex-grow: 1;
  padding: 0 2rem;
}

.description {
  text-align: justify;
  margin-bottom: 1rem;
}

.button-row {
  text-align: right;
}

button {
  font-size: 0.75rem;
}

@media (min-width: 700px) {
  section {
    flex-direction: row;
  }

  figure {
    max-width: 50%;
  }

  img {
    margin-bottom: 0;
  }
}

@media (min-width: 1400px) {
  figure {
    max-width: 30%;
  }
}
</style>