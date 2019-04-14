<template>
  <Layout>
    <div>
      <h1>Googlemap with locations</h1>
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
          draggable: false,
          infoText: this.$page.allLocations.edges[i].node["name"]
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