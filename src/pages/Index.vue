<template>
  <Layout>
    <div>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <g-image alt="Example image" src="~/favicon.png" width="135"/>

      <h1>Hello, world!</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
      <GoogleMap :locations="$page.allLocations.edges" :markers="getMarkers()"/>
    </div>
  </Layout>
</template>

<script>
import GoogleMap from "~/components/GoogleMap.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    GoogleMap
  },
  methods: {
    getMarkers() {
      let markers = [];
      for (let i = 0; i < this.$page.allLocations.edges.length; i++) {
        markers = markers.concat({
          position: {
            lat: parseFloat(this.$page.allLocations.edges[i].node["latitude"]),
            lng: parseFloat(this.$page.allLocations.edges[i].node["longitude"])
          },
          clickable: true,
          draggable: false
        });
      }
      return markers;
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query Locations {
  allLocations {
    edges {
      node {
        name
        capital
        latitude
        longitude
      }
    }
  }
}
#
</page-query>