<template>
  <div class="menu">
    <div class="menu-toggle" :class="{'menu-dark': open}" @click="toggleNav" v-if="open">
      <button>
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="menu-toggle" @click="toggleNav" v-else>
      <button>
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="overlay" :class="{'overlay-open': open}">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/posts">Posts</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/chapters">Chapters</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/gallery">Gallery</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
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
  right: -100px;
  top: -100px;
  z-index: 200;
  background-color: var(--secondary-color);
  border-radius: 50%;
  height: 200px;
  width: 200px;
}

.menu-dark {
  background: var(--primary-background);
}

.menu-toggle button {
  background-color: inherit;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-background);
  border: none;
  padding: none;
  margin: none;
  position: absolute;
  top: 114px;
  left: 42px;
  display: inline-block;
}

.menu-dark button {
  color: var(--secondary-color);
  background-color: inherit;
}

.overlay {
  position: fixed;
  background: var(--primary-background);
  color: var(--primary-color);
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
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
  font-size: 2rem;
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
  text-decoration: none;
  color: var(--secondary-color);
  text-transform: uppercase;
}

.overlay ul li a:hover {
  color: var(--primary-color);
}
</style>