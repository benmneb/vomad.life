<script setup>
const tags = ref([
	'article',
	'guide',
	'high-five',
	'book-review',
	'interview',
	'survey',
])
const appliedTag = ref(null)
const allPosts = await queryContent().find()
const relevantPosts = ref(allPosts)

async function handleTagClick(tag) {
	if (appliedTag.value === tag) {
		appliedTag.value = null
		relevantPosts.value = allPosts
		return
	}

	const postsWithTag = await queryContent()
		.where({ tag: { $eq: tag } })
		.find()

	appliedTag.value = tag
	relevantPosts.value = postsWithTag
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
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag">
				<nuxt-link to="https://vomad.guide?ref=vomad.life">
					<nuxt-img
						src="guide/hero.webp"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-if="!appliedTag">
				<nuxt-link to="https://veganise.it?ref=vomad.life">
					<nuxt-img
						src="veganise-it/hero.webp"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
			<div v-for="post of relevantPosts" :key="post._path">
				<nuxt-link :to="post._path">
					<nuxt-img
						:src="`content/${post.image}/hero.webp`"
						sizes="sm:25vw md:25vw lg:25vw xl:25vw"
					/>
				</nuxt-link>
			</div>
		</nav>
	</section>
</template>

<style scoped lang="scss">
section {
	margin: 4rem 0;
}

h2 {
	color: $grey;
	margin: 0;
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
	flex-wrap: wrap;
	gap: 1rem;
	height: 120px;
}

.tag {
	white-space: nowrap;
	font-weight: bold;
	font-size: $font-size-large;
	cursor: pointer;
	transition: font-size $transition-duration-normal ease-in-out,
		color $transition-duration-normal ease-in-out;

	&:hover {
		font-size: calc(15px + 2.2vw);
		mask: linear-gradient(-60deg, $black 30%, $grey, $black 70%) right/300% 100%;
		animation: shimmer 2s 1;
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

	a {
		display: flex;
		overflow: hidden;

		img {
			width: 100%;
			transition: transform $transition-duration-slow ease;

			&:hover {
				transform: scale(1.01);
			}
		}
	}
}
</style>
