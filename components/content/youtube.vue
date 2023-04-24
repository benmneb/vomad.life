<script setup lang="ts">
defineProps({
	id: String,
	title: String,
	caption: String,
	start: String,
})
</script>

<template>
	<figure>
		<iframe
			:src="`https://www.youtube.com/embed/${id}?start=${start || 0}`"
			:title="`${title} @ Vomad.Life`"
			frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
			allowfullscreen
		></iframe>
		<figcaption v-if="caption">{{ caption }}</figcaption>
	</figure>
</template>

<style scoped lang="scss">
figure {
	width: 80vw;
	margin: 2rem 0;
	margin-left: calc(-1 * (80vw - (800px - 2rem)) / 2);

	@media screen and (max-width: 800px) {
		width: unset;
		margin-left: unset;
	}
}

iframe {
	object-fit: contain;
	aspect-ratio: 16 / 9;
	width: 100%;
	max-height: 80vh;
	border-radius: 1rem;
}

figcaption {
	text-align: center;
	font-style: italic;
	max-width: 1200px;
	margin: 1rem auto 0;
}
</style>
