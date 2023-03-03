<script setup>
defineProps({
	name: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<icon :name="name" />
</template>

<style scoped lang="scss">
svg {
	transition: scale $transition-duration-normal ease-in-out;

	&:hover {
		scale: 1.1;
		cursor: pointer;
	}
}
</style>
