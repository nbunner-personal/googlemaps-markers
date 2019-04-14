<template>
  <div>
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
    <div v-for="loc in locations">
      {{ loc.node.name }}
      <br>
      {{ loc.node.capital }}
      <br>
      {{ loc.node.latitude }}
      <br>
      {{ loc.node.longitude }}
      <br>
    </div>
  </div>
</template>

<script>
// import GmapMap from "vue2-google-maps";
// import GmapMarker from "vue2-google-maps";

export default {
  mounted() {},
  props: {
    locations: {
      type: Array,
      required: true
    },
    markers: {
      type: Array,
      required: true
    }
  }
};
</script>
