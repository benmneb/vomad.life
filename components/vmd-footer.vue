<template>
	<section>
		<footer>&copy; 2016 - {{ new Date().getFullYear() }}</footer>
		<nuxt-img src="fruit.webp" sizes="sm:100vw md:100vw lg:100vw xl:100vw" />
	</section>
</template>

<style scoped lang="scss">
section {
	max-height: 80vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	footer {
		position: absolute;
		font-size: $font-size-large;
		color: $bg-color-light;
		text-align: center;
		font-weight: bold;
	}
}
</style>
