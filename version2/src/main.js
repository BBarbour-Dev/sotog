// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from './layouts/Layout.vue';

import urlForImage from './utils/urlForImage';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Layout);
  Vue.prototype.$urlForImage = urlForImage;
}
