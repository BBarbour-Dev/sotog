<template>
  <header>
    <img class="logo-image" src="~/assets/logo.png" alt="Saga of the Old Gods" />
    <p
      class="description"
    >After experiencing a prophecy dream about war and destruction, Brie seeks out the truth behind them only to find out that there are far more details about her existence and who she truly is than she could have ever imagined.</p>
    <h2>New to the series?</h2>
    <button class="start-here">
      <nuxt-link to="/chapter/chapter-one">Start From Beginning</nuxt-link>
    </button>
  </header>
</template>

<script>
export default {
  name: "mobile-header"
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url("~assets/ravenwing.png");
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.logo-image {
  max-width: 100%;
}

.description {
  text-align: justify;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 2rem;
}

h2 {
  font-style: italic;
  color: var(--secondary-font-color);
  margin-bottom: 2rem;
  font-size: 1rem;
}

.start-here {
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.start-here a {
  font-family: var(--secondary-font-face);
  text-decoration: none;
  color: var(--primary-font-color);
}

.start-here a:hover {
  color: var(--secondary-font-color);
}
</style>