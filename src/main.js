// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import * as VueGoogleMaps from "vue2-google-maps";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GRIDSOME_GOOGLEMAPS_API_KEY
    }
  });
}
