<template>
  <div class="menu">
    <div class="menu-toggle" :class="{ 'menu-dark': open }" @click="toggleNav" v-if="open">
      <button>
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="menu-toggle" @click="toggleNav" v-else>
      <button>
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="overlay" :class="{ 'overlay-open': open }" @click="toggleNav">
      <nav-links></nav-links>
    </div>
  </div>
</template>

<script>
import navLinks from './nav-links';
export default {
  name: 'mobile-nav',
  components: {
    navLinks
  },
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
  right: 0px;
  top: 0px;
  z-index: 200;
  background-color: var(--secondary-color);
  margin-right: 0.35rem;
  margin-top: 0.35rem;
  padding: 0.35rem;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.menu-dark {
  background: var(--primary-background);
  box-shadow: none;
}

.menu-toggle button {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  background-color: inherit;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-background);
  border: none;
  margin: none;
  padding: none;
  display: inline-block;
  cursor: pointer;
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
  -webkit-transition: opacity 0.35s, visbility, 0.35s, height 0.35s;
  -o-transition: opacity 0.35s, visbility, 0.35s, height 0.35s;
  transition: opacity 0.35s, visbility, 0.35s, height 0.35s;
  overflow: hidden;
  z-index: 100;
}

.overlay-open {
  height: 100%;
  opacity: 0.95;
  visibility: visible;
}

.overlay >>> nav {
  position: relative;
  height: 70%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.overlay >>> nav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}

.overlay >>> ul li {
  height: calc(100% / 6);
  min-height: 2.5rem;
  position: relative;
}

.overlay >>> ul li a {
  text-decoration: none;
  color: var(--secondary-color);
  text-transform: uppercase;
}

.overlay >>> ul li a:hover {
  color: var(--primary-color);
}

@media (min-width: 1000px) {
  .menu {
    display: none;
  }
}
</style>