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
			:position="m.geomerty"
			:clickable="true"
			:draggable="false"
			@click="testClickEvent(m.full_name)"
		/>
	</GmapMap>
</template>

<script>

</script>