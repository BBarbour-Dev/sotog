<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/updates/1">Updates</nuxt-link>
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
</template>

<script>
export default {
  name: "nav-links"
};
</script>