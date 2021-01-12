<template>
	<section>
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
				@click="handleMarkerClick(m)"
			/>
			<GmapMarker v-if="this.selectedMarker"
				:position="this.selectedMarker.geometry.location"
				:clickable="false"
				:draggable="false"
				:icon="{ scaledSize: {width: 28, height: 45}, url: 'https://www.clker.com/cliparts/R/g/O/v/U/h/google-maps-marker-for-residencelamontagne-md.png' }"
			/>
		</GmapMap>
		<results-list-item :result="this.selectedMarker"></results-list-item>
	</section>
</template>

<script>
import ResultsListItem from './ResultsListItem.vue';
export default {
  components: { ResultsListItem },
  props: ['searchResults'],
  data() {
    return {
			markers: this.searchResults,
			centerMap: {
				lat: this.$store.state.geolocation.coords.latitude, 
				lng: this.$store.state.geolocation.coords.longitude
			},
			selectedMarker: ""
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
		},
		handleMarkerClick(marker) {
			this.centerMapToClickedLocation(marker.name);
			this.setSelectedMarker(marker.name);
		},
		setSelectedMarker(name) {
			this.selectedMarker = this.markers.find(marker => name === marker.name)
		}
  }
};
</script>