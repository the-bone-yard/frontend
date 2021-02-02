<template>
	<section>
		<p>Zoom out on map to ensure all result markers are visible.</p>
		<GmapMap
			class="gmap-map"
			:center="centerMap"
			:zoom="10"
			:options="{
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullScreenControl: true,
				disableDefaultUI: false	
			}"
			map-type-id="terrain"
			style="width: 100%; height: 50vh"
		>
			<GmapMarker
				v-for="(m, index) in markers"
				:key="index"
				:position="{ lat: m.lat, lng: m.lng }"
				:clickable="true"
				:draggable="false"
				@click="handleMarkerClick(m)"
			/>
			<GmapMarker v-if="this.selectedMarker"
				:position="{ lat: this.selectedMarker.lat, lng: this.selectedMarker.lng }"
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
					lat: findLocation.lat,
					lng: findLocation.lng
				};
			}
		},
		resetCenter() {
			this.centerMap = {
				lat: 0,
				lng: 0
			}
		},
		async handleMarkerClick(marker) {
			await this.resetCenter()
			this.centerMapToClickedLocation(marker.name);
			this.setSelectedMarker(marker.name);
		},
		setSelectedMarker(name) {
			this.selectedMarker = this.markers.find(marker => name === marker.name)
		}
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
section {
	@include customDisplayFlex(0, 0, column);
	justify-content: center;
	align-items: center;
}
</style>