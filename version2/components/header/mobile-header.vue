<template>
  <header>
    <img class="logo-image" src="~/assets/logo.png" alt="Saga of the Old Gods" />
    <h2>After experiencing a prophecy dream about war and destruction, Brie seeks out the truth behind them only to find out that there are far more details about her existence and who she truly is than she could have ever imagined.</h2>
    <h3>New to the series?</h3>
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
}

.logo-image {
  max-width: 100%;
  min-width: 400px;
  margin-top: 15vh;
}

h2 {
  padding: 2rem;
  text-align: justify;
  font-size: 1.2rem;
  font-weight: 400;
}

h3 {
  padding: 2rem;
  font-style: italic;
}

.start-here {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.start-here a {
  font-family: var(--secondary-font-face);
  text-decoration: none;
}
</style>