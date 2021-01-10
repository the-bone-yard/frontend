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
				@click="handleMarkerClick(m.name)"
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
				lat: 40, lng: -105.0465427
			},
			selectedMarker: {}
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
		},
		handleMarkerClick(name) {
			this.centerMapToClickedLocation(name);
			this.setSelectedMarker(name);
		},
		setSelectedMarker(name) {
			this.selectedMarker = this.markers.find(marker => name === marker.name)
		}
  }
};
</script>