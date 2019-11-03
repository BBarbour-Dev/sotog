<template>
  <ul class="social-media">
    <li>
      <a
        href="https://www.facebook.com/kjsylva/"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-facebook-square"></i
      ></a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/kjsylvaart/"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-instagram"></i
      ></a>
    </li>
    <li>
      <a
        href="https://twitter.com/KjSylva"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-twitter-square"></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "social-media"
};
</script>

<style scoped>
ul {
  padding: 0;
  display: flex;
  list-style-type: none;
}

li {
  font-size: 2rem;
}

li:not(:last-child) {
  margin-right: 0.5rem;
}
</style>