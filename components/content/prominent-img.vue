<script setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: '',
	},
	caption: {
		type: String,
	},
})
</script>

<template>
	<figure>
		<nuxt-img
			:src="`content/${src}.webp`"
			:alt="`${alt} @ https://Vomad.Life`"
		/>
		<figcaption v-if="caption">{{ caption }}</figcaption>
	</figure>
</template>

<style scoped lang="scss">
figure {
	width: 80vw;
	margin: 2rem 0;
	margin-left: calc(-1 * (80vw - (800px - 2rem)) / 2);

	img {
		width: 100%;
		max-height: calc(80vh - 2rem); // 2rem for the margin
		object-fit: contain;
	}

	figcaption {
		text-align: center;
		font-style: italic;
		max-width: 1200px;
		margin: 1rem auto 0;
	}
}
</style>
