<script setup lang="ts">
useHead({
	title: 'Vomad Life',
	meta: [
		{
			name: 'description',
			content:
				'Welcome to the Vomad Life - Aussie Plant-Based Slow-Travelling Digital Nomads Explore the World and bring you Guides, Articles, Surveys, Best Of Lists, Book Reviews and more',
		},
	],
	script: [
		{
			async: true,
			src: 'https://umamalytics.vercel.app/script.js',
			'data-website-id': 'ee02363d-e9c5-41be-93de-621b7cc231e4',
			'data-domains': 'vomad.life,vomadlife.com',
		},
	],
})
</script>

<template>
	<main>
		<hero imgSrc="home/hero.webp">Travel world.<br />Eat plants.</hero>
		<posts-grid />
		<social-proof />
	</main>
</template>
