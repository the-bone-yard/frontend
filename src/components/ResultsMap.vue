<template>
	<GmapMap
		:center="centerMap"
		:zoom="10"
		map-type-id="terrain"
		style="width: 100%; height: 50vh"
	>
		<GmapMarker
			v-for="(m, index) in markers"
			:key="index"
			:position="m.geometry.location"
			:clickable="true"
			:draggable="false"
			@click="centerMapToClickedLocation(m.name)"
		/>
	</GmapMap>
</template>

<script>
export default {
  props: ['searchResults'],
  data() {
    return {
			markers: this.searchResults,
			centerMap: {
				lat: 40, lng: -105.0465427
			}
    }
  },
  methods: {
    centerMapToClickedLocation(name) {
			const findLocation = this.markers.find(loc => loc.name === name);
			if (findLocation) {
				this.centerMap = {
					lat: findLocation.geometry.location.lat,
					lng: findLocation.geometry.location.lng
				};
			}
			// make helper method that will open details of park they clicked on
    }
  }
};
</script>