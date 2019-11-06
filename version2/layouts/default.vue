<template>
  <div class="wrapper">
    <mobile-nav />
    <logo-header />
    <main>
      <nuxt />
      <page-footer />
    </main>
  </div>
</template>

<script>
import mobileNav from "../components/wrapper/mobile-nav.vue";
import logoHeader from "../components/wrapper/logo-header.vue";
import pageFooter from "../components/wrapper/page-footer.vue";

export default {
  name: "default-layout",
  components: {
    logoHeader,
    mobileNav,
    pageFooter
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:400,400i,700&display=swap");

:root {
  --primary-font: "Montserrat", sans-serif;
  --secondary-font: "Open Sans", sans-serif;
  --primary-color: rgb(232, 242, 237);
  --dim: rgb(126, 134, 137);
  --secondary-color: rgb(255, 230, 181);
  --primary-background: rgb(26, 39, 52);
  --panel-background: rgba(12, 20, 25, 0.75);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

body {
  background: var(--primary-background);
  font-family: var(--primary-font);
  color: var(--primary-color);
}

p {
  line-height: 2;
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

h1 {
  color: var(--secondary-color);
  font-family: var(--secondary-font);
  margin: 2rem 0;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 2px;
}

strong {
  font-weight: 700px;
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

  .container {
    padding: 4rem;
  }
}
</style>
