<script setup>
const tags = ref(['article', 'high-five', 'book-review', 'interview', 'survey'])
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
	<nav>
		<div class="filter-title">filter posts by</div>
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
		<div v-if="!appliedTag">
			<nuxt-link to="/travel-log">Travel Log</nuxt-link>
		</div>
		<div v-for="post of relevantPosts" :key="post._path">
			<nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
		</div>
	</nav>
</template>

<style scoped lang="scss">
.filter-title {
	color: $grey;
}

.tags-wrapper {
	display: flex;
	align-items: center;
}

.tag {
	margin-right: 0.5rem;
	cursor: pointer;
	transition: all $transition-duration-normal ease-in-out;
}

.active {
	color: $primary;
	font-size: 1.2em;
}
</style>
