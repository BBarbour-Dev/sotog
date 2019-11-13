<template>
  <footer>
    <social-media />
    <p>&copy; {{ new Date().getFullYear() }}, KJ Sylva</p>
    <p class="tiny">
      Site design by
      <a href="https://bbarbour.dev" target="_blank" rel="noopener noreferrer"
        >bbarbour.dev</a
      >
    </p>
  </footer>
</template>

<script>
import socialMedia from "./social-media";
export default {
  name: "page-footer",
  components: {
    socialMedia
  }
};
</script>

<style scoped>
footer {
  padding: 1rem;
  width: 100%;
  color: var(--dim);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.tiny {
  font-size: 0.75rem;
}

footer >>> .social-media {
  justify-content: center;
  margin-bottom: 1rem;
}

@media (min-width: 1000px) {
  footer >>> .social-media {
    display: none;
  }
}
</style>