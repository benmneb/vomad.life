<script setup lang="ts">
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
	&:hover {
		cursor: pointer;
		animation: breathing 3s ease-in-out infinite;
	}
}

@keyframes breathing {
	0% {
		transform: scale(1);
	}

	40% {
		transform: scale(1.1);
	}
	60% {
		transform: scale(1.1);
	}

	90% {
		transform: scale(1);
	}
}
</style>
