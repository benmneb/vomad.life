<script setup lang="ts">
const tags = ref([
	'article',
	'guide',
	'high-five',
	'book-review',
	'interview',
	'survey',
])
const appliedTag = ref<string | null>(null)
const allPosts = await queryContent().sort({ date: -1 }).find()
const allPostsRef = ref(allPosts)
const relevantPosts = ref(allPosts)
const showVideoModal = ref<boolean>(false)

async function handleTagClick(tag: string) {
	if (appliedTag.value === tag) {
		appliedTag.value = null
		relevantPosts.value = allPostsRef.value
		return
	}

	appliedTag.value = tag
	relevantPosts.value = allPostsRef.value.filter((p) => p.tag === tag)
}

function handleModalOpen() {
	showVideoModal.value = true
	document.body.style.overflow = 'hidden'
}

function handleModalClose() {
	showVideoModal.value = false
	document.body.style.overflow = 'auto'
}
</script>

<template>
	<section>
		<div class="tags-section">
			<h2>filter posts by</h2>
			<div class="tags-wrapper">
				<span
					v-for="tag of tags"
					:key="tag"
					class="tag"
					tabindex="0"
					:class="{ active: tag === appliedTag }"
					@click="handleTagClick(tag)"
				>
					#{{ tag }}
				</span>
			</div>
		</div>
		<nav>
			<div v-if="!appliedTag">
				<nuxt-link to="/travel-log">
					<nuxt-img
						src="travel-log/hero.webp"
						sizes="sm:100vw md:50vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag">
				<nuxt-link to="https://vomad.guide?ref=vomad.life" target="_blank">
					<nuxt-img
						src="guide/hero.webp"
						sizes="sm:100vw md:50vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag">
				<nuxt-link to="https://veganise.it?ref=vomad.life" target="_blank">
					<nuxt-img
						src="veganise-it/hero.webp"
						sizes="sm:100vw md:50vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-for="post of relevantPosts" :key="post._path">
				<nuxt-link :to="post._path">
					<nuxt-img
						:src="`content/${post.image}/hero.webp`"
						sizes="sm:100vw md:50vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag" class="video-link" @click="handleModalOpen">
				<nuxt-link>
					<nuxt-img
						src="respect-existence.webp"
						sizes="sm:100vw md:50vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
		</nav>
	</section>
	<modal-base :show="showVideoModal" @close="handleModalClose">
		<main v-if="showVideoModal">
			<div class="streamable">
				<video autoplay controls>
					<source
						src="https://d31lsddm57ovii.cloudfront.net/be-vegan.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
		</main>
	</modal-base>
</template>

<style scoped lang="scss">
section {
	margin: 4rem 0 2rem;
	padding-bottom: 2rem;
	overflow: hidden;
}

h2 {
	color: $grey;
	margin: 0;

	@media screen and (max-width: 1100px) {
		width: 100%;
		text-align: left;
		padding: 0 1rem;
		font-size: $font-size-medium;
	}
}

.tags-section {
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 0 4rem;
}

.tags-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	height: 120px;

	@media screen and (max-width: 1100px) {
		text-align: left;
		justify-content: start;
		width: 100%;
		overflow-x: scroll;
		scrollbar-width: none;
		padding: 0 1rem;
		height: 80px;

		&::-webkit-scrollbar {
			display: none;
		}
	}
}

.tag {
	white-space: nowrap;
	font-weight: bold;
	font-size: $font-size-large;
	cursor: pointer;
	mask: linear-gradient(-60deg, $black 30%, $grey, $black 70%) right/300% 100%;

	@media screen and (min-width: 1100px) {
		transition: font-size $transition-duration-normal ease-in-out,
			color $transition-duration-normal ease-in-out;

		&:hover {
			font-size: calc(15px + 2.2vw);
			animation: shimmer 2s 1;
		}
	}

	@media screen and (max-width: 1100px) {
		font-size: $font-size-massive;

		&:focus {
			animation: shimmer 2s 1;
		}
		&:active {
			animation: none;
		}
	}
	@keyframes shimmer {
		100% {
			mask-position: left;
		}
	}
}

.active {
	color: $primary;
}

nav {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media screen and (max-width: 1400px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}

	a {
		display: flex;

		img {
			width: 100%;
			transition: all $transition-duration-slow ease;

			&:hover {
				transform: scale(1.0275);
				border-radius: 1rem;
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
				z-index: 50;
			}
		}
	}
}

.video-link {
	cursor: zoom-in;
}

main {
	position: relative;
	width: 1000px;
	max-height: 100%;
	border-radius: 1rem;
	margin: auto;
	background-color: $bg-color-dark;
	box-shadow: 0 0 2rem $grey;
	transition: all 0.3s ease;
	cursor: auto;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	.streamable {
		padding-bottom: 56.25%;

		video {
			z-index: 1100;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0px;
			top: 0px;
			overflow: hidden;
		}
	}

	figure {
		z-index: 1100;
		margin: 0;
		width: 100%;
	}
}
</style>
