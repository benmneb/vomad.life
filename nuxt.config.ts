import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	modules: ['@nuxt/content'],
	css: ['@/assets/styles/baseline.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/styles/_colours.scss" as *; @use "@/assets/styles/_typography.scss" as *;',
				},
			},
		},
	},
})
