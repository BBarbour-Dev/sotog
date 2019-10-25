<template>
  <div class="menu">
    <button class="menu-toggle" @click="toggleNav" v-if="open">&times;</button>
    <button class="menu-toggle" @click="toggleNav" v-else>&#9776;</button>
    <div class="overlay" :class="{'overlay-open': open}">
      <nav>
        <ul>
          <li class="swing-in-right-bck">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="swing-in-right-bck">
            <nuxt-link to="/posts">Posts</nuxt-link>
          </li>
          <li class="swing-in-right-bck">
            <nuxt-link to="/chapters">Chapters</nuxt-link>
          </li>
          <li class="swing-in-right-bck">
            <nuxt-link to="/gallery">Gallery</nuxt-link>
          </li>
          <li class="swing-in-right-bck">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="swing-in-right-bck">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-nav",
  data: function() {
    return {
      open: false
    };
  },
  methods: {
    toggleNav() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
.menu-toggle {
  position: fixed;
  right: 0;
  z-index: 200;
  background-color: var(--secondary-font-color);
  border-radius: 50% 50% 50% 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  margin: 4px;
}

.overlay {
  position: fixed;
  background: var(--primary-background);
  color: var(--primary-font-color);
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visbility, 0.35s, height 0.35s;
  overflow: hidden;
  z-index: 100;
}

.overlay-open {
  height: 100%;
  opacity: 0.95;
  visibility: visible;
}

.overlay nav {
  position: relative;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
}

.overlay nav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}

.overlay ul li {
  height: calc(100% / 6);
  min-height: 2.5rem;
  position: relative;
}

.overlay ul li a {
  font-family: var(--secondary-font-face);
  text-decoration: none;
  color: var(--primary-font-color);
  text-transform: uppercase;
}

.overlay ul li a:hover {
  color: var(--secondary-font-color);
}
</style>