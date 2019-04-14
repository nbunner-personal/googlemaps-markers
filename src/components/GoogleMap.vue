<template>
  <div>
    <GmapMap
      :center="mapCenter"
      :zoom="1"
      map-type-id="terrain"
      style="height: 300px; max-width:700px; width: 100%;"
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
        <span
          class="loc-item loc__name"
          @click="resetMapCenter(loc.node.latitude,loc.node.longitude)"
        >{{ loc.node.name }}</span>
        <span class="loc-item loc__capital">{{ loc.node.capital }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
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
      },
      mapCenter: {
        lat: 50,
        lng: 4
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
    },
    resetMapCenter(lat, lng) {
      this.mapCenter = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      };
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {}
};
</script>

<style scoped>
.loc-item {
  display: block;
}
.loc__name {
  cursor: pointer;
  font-weight: bold;
}
.loc__name:hover {
  color: #0a7bff;
  text-decoration: underline;
}
.loc__capital {
  font-style: italic;
}
</style>
