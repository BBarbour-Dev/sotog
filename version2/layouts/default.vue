<template>
  <div class="wrapper">
    <mobile-nav></mobile-nav>
    <logo-header></logo-header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import mobileNav from "../components/header/mobile-nav.vue";
import logoHeader from "../components/header/logo-header.vue";

export default {
  name: "default-layout",
  components: {
    logoHeader,
    mobileNav
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:400,400i,700&display=swap");

:root {
  --primary-font: "Montserrat", sans-serif;
  --secondary-font: "Open Sans", sans-serif;
  --primary-color: rgb(232, 242, 237);
  --secondary-color: rgb(255, 230, 181);
  --primary-background: rgb(26, 39, 52);
  --shade: rgb(72, 72, 73);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
}

body {
  background: var(--primary-background);
  font-family: var(--primary-font);
  color: var(--primary-color);
}

a {
  color: vary(--secondary-font-color);
}

a:link,
a:visited {
  color: var(--secondary-color);
}

a:hover {
  color: var(--primary-color);
}

.wrapper {
  width: 100%;
  min-height: 300vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1000px) {
  .wrapper {
    flex-direction: row;
  }

  main {
    flex-basis: 70%;
  }

  header {
    flex-basis: 30%;
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: var(--secondary-color);
  font-family: var(--secondary-font);
  margin: 2rem 0;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
}
</style>
