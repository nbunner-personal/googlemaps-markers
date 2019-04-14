<template>
  <div>
    <GmapMap
      :center="{lat: 50, lng: 4}"
      :zoom="1"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <strong>{{ infoContent }}</strong>
      </GmapInfoWindow>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="toggleInfoWindow(m, index)"
      />
    </GmapMap>
    <ul v-for="loc in locations" class="loc">
      <li>
        <span class="loc__name">{{ loc.node.name }}</span>
        <span class="loc__capital">{{ loc.node.capital }}</span>
        <span class="latlon">
          <span class="latlon__lat">{{ loc.node.latitude }}</span>
          <span class="latlon__lon">{{ loc.node.longitude }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// import GmapMap from "vue2-google-maps";
// import GmapMarker from "vue2-google-maps";

export default {
  props: {
    locations: {
      type: Array,
      required: true
    },
    markers: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  },
  computed: {}
};
</script>
