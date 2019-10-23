<template>
  <div class="wrapper">
    <mobile-header></mobile-header>
    <nuxt />
  </div>
</template>

<script>
import mobileHeader from "../components/header/mobile-header";

export default {
  name: "default-layout",
  components: {
    mobileHeader
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:400,400i,700&display=swap");

:root {
  --primary-font-face: "Open Sans", sans-serif;
  --secondary-font-face: "Montserrat", sans-serif;
  --primary-font-color: rgb(255, 251, 188);
  --secondary-font-color: rgb(243, 236, 126);
  --primary-background: rgb(26, 39, 52);
  --off-white: rgb(230, 230, 190);
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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: var(--primary-background);
  font-family: var(--primary-font-face);
  color: var(--primary-font-color);
  min-height: 100vh;
}

a {
  color: vary(--secondary-font-color);
}

a:link,
a:visited {
  color: var(--secondary-font-color);
}

a:hover {
  color: var(--off-white);
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
