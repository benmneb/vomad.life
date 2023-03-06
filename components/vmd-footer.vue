<script setup lang="ts">
const showModal = ref<boolean>(false)

function handleClickCopyLeft() {
	showModal.value = true
	document.body.style.overflow = 'hidden'
}

function handleModalClose() {
	showModal.value = false
	document.body.style.overflow = 'auto'
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
	<Teleport to="body">
		<modal-base
			:show="showModal"
			@close="handleModalClose"
			image="modals/license.webp"
		>
			<template #overlay-text>Welcome to the Vomad Life.</template>

			<hgroup>
				<h1>CopyLeft {{ new Date().getFullYear() }}</h1>
				<p>
					CC BY-SA 4.0&nbsp;<a
						href="https://creativecommons.org/licenses/by-sa/4.0/"
						target="_blank"
						><icon-btn name="ri:external-link-line"
					/></a>
				</p>
			</hgroup>

			You are free to:
			<ul>
				<li>Copy and redistribute our work in any medium or format.</li>
				<li>
					Remix, transform, and build upon our work for any purpose, even
					commercially.
				</li>
			</ul>

			Under the following terms:
			<ul>
				<li>
					You must give
					<nuxt-link
						to="https://wiki.creativecommons.org/wiki/License_Versions#Detailed_attribution_comparison_chart"
						target="_blank"
						>appropriate credit</nuxt-link
					>, provide a link to
					<nuxt-link
						to="https://creativecommons.org/licenses/by-sa/4.0/"
						target="_blank"
						>the license</nuxt-link
					>, and indicate if changes were made. You may do so in any reasonable
					manner, but not in any way that suggests we endorse you or your use.
				</li>
				<li>
					If you remix, transform, or build upon our work, you must distribute
					your contributions under this
					<nuxt-link
						to="https://creativecommons.org/licenses/by-sa/4.0/"
						target="_blank"
						>same license</nuxt-link
					>.
				</li>
			</ul>
			<p>
				This is a human-readable summary of (and not a substitute for)
				<nuxt-link
					to="https://creativecommons.org/licenses/by-sa/4.0/"
					target="_blank"
					>the license</nuxt-link
				>.
			</p>
		</modal-base>
	</Teleport>
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

			&:hover {
				cursor: zoom-in;
			}
		}
	}
}

hgroup {
	margin-bottom: 2rem;

	h1 {
		margin-bottom: 0.3rem;
	}

	span {
		font-style: italic;
	}

	p {
		display: flex;
		align-items: center;

		a {
			display: flex;

			&:hover {
				box-shadow: none;
			}
		}

		svg {
			color: $primary;

			&:hover {
				scale: 1;
			}
		}
	}
}
</style>
