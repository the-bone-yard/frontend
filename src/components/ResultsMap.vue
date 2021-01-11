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
				@click="handleMarkerClick($event, m)"
			/>
			<GmapMarker v-if="this.selectedMarker"
				:position="this.selectedMarker.geometry.location"
				:clickable="false"
				:draggable="false"
				icon="https://www.google.com/mapfiles/marker_green.png"
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
		handleMarkerClick(event, marker) {
			this.centerMapToClickedLocation(marker.name);
			this.setSelectedMarker(marker.name);
		},
		setSelectedMarker(name) {
			this.selectedMarker = this.markers.find(marker => name === marker.name)
		}
  }
};
</script>