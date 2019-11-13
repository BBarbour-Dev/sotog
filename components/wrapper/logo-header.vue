<template>
  <header>
    <img
      class="logo-image"
      src="~/assets/logo.png"
      alt="Saga of the Old Gods"
    />
    <p class="description">
      After experiencing a prophecy dream about war and destruction, Brie seeks
      out the truth behind them only to find out that there are far more details
      about her existence and who she truly is than she could have ever
      imagined.
    </p>
    <h2>New to the series?</h2>
    <button class="button">
      <a
        href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aab177feb-c271-4e96-acaa-21b093aacc82&fbclid=IwAR3HQqumKifdeKHFFJSppuRa5yHBW2ZsddkHBlni3XTRWx2YnrSivpNaK1A"
        target="_blank"
        rel="noopener noreferrer"
        >Start From Beginning</a
      >
    </button>
    <nav-links></nav-links>
    <social-media />
  </header>
</template>

<script>
import navLinks from './nav-links';
import socialMedia from './social-media';

export default {
  name: 'logo-header',
  components: {
    navLinks,
    socialMedia
  }
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 85vh;
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.1)),
      to(rgba(0, 0, 0, 0.5))
    ),
    url('~assets/ravenwing.png');
  background: -o-linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url('~assets/ravenwing.png');
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url('~assets/ravenwing.png');
  background-attachment: fixed;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 2rem;
}

.logo-image {
  max-width: 100%;
  min-width: 325px;
}

.description {
  text-align: justify;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 2rem;
}

h2 {
  font-style: italic;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1rem;
}

button {
  margin-bottom: 1rem;
}

header >>> nav {
  display: none;
}

header >>> nav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
  text-align: center;
}

header >>> nav ul li:not(:last-child) {
  margin-bottom: 1rem;
}

header >>> nav ul li a {
  font-family: var(--secondary-font);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}

header >>> .social-media {
  display: none;
}

@media (min-width: 1000px) {
  header {
    min-height: 100%;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    background-position: left;
    background-size: contain;
  }

  .start-here {
    margin-bottom: 2rem;
  }

  header >>> nav {
    display: block;
    margin-bottom: 1rem;
  }

  header >>> .social-media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
</style>