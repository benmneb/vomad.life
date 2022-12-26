// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxt/image-edge'],
	css: ['@/assets/styles/baseline.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/styles/_colours.scss" as *; @use "@/assets/styles/_typography.scss" as *; @use "@/assets/styles/_transitions.scss" as *;',
				},
			},
		},
	},
	image: {
		dir: 'assets/images',
		screens: {
			// max-width in px
			sm: 640,
			md: 1024,
			lg: 1920,
			xl: 2280,
		},
	},
	content: {
		markdown: { remarkPlugins: ['remark-reading-time'] },
	},
})
