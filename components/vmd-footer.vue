<script setup>
function handleClickCopyLeft() {
	alert('TODO: Add License modal')
}

function handleClickGitHub() {
	window.open('https://github.com/benmneb/vomad.life', '_blank')
}
</script>

<template>
	<footer>
		<section>
			<icon-btn name="mdi:copyleft" @click="handleClickCopyLeft" />
			2016 - {{ new Date().getFullYear() }}
			<icon-btn name="mdi:github" @click="handleClickGitHub" />
		</section>
		<nuxt-img
			src="footer.webp"
			sizes="sm:100vw md:100vw lg:100vw xl:100vw"
			loading="lazy"
		/>
	</footer>
</template>

<style scoped lang="scss">
footer {
	max-height: 80vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	section {
		position: absolute;
		font-size: $font-size-large;
		color: $bg-color-light;
		text-align: center;
		font-weight: bold;
		text-shadow: $black 0 0 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;

		svg {
			box-shadow: $black 0 0 2rem;
			border-radius: 50%;
		}
	}
}
</style>
