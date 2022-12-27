<template>
	<iframe
		:src="`https://www.youtube.com/embed/${id}`"
		:title="`${title} @ Vomad.Life`"
		frameborder="0"
		allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
		allowfullscreen
	></iframe>
</template>

<style scoped lang="scss">
iframe {
	object-fit: contain;
	aspect-ratio: 16 / 9;
	width: 80vw;
	max-height: 80vh;
	margin: 1rem 0;
	margin-left: calc(-1 * (80vw - (800px - 2rem)) / 2);
}
</style>

<script setup>
defineProps({
	id: String,
	label: String,
})
</script>
