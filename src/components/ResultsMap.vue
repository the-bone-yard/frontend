<template>
	<GmapMap
		:center="{ lat: 40.0562161, lng: -105.0465427 }"
		:zoom="14"
		map-type-id="terrain"
		style="width: 100%; height: 50vh"
	>
		<GmapMarker
			:key="index"
			v-for="(m, index) in markers"
			:position="m.geometry.location"
			:clickable="true"
			:draggable="false"
			@click="testClickEvent(m.name)"
		/>
	</GmapMap>
</template>

<script>
export default {
  props: ['searchResults'],
  data() {
    return {
      markers: this.searchResults
    }
  },
  methods: {
    testClickEvent(name) {
      console.log(name)
    }
  }
};
</script>