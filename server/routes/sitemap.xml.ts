import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

// https://www.sitemaps.org/protocol.html

export default defineEventHandler(async (event) => {
	const docs = await serverQueryContent(event).find()
	const sitemap = new SitemapStream({
		hostname: 'https://vomad.life',
	})

	sitemap.write({
		url: '/',
		changefreq: 'monthly',
	})

	sitemap.write({
		url: 'https://vomad.life/travel-log',
		changefreq: 'monthly',
	})

	for (const doc of docs) {
		sitemap.write({
			url: doc._path,
			changefreq: 'monthly',
			lastmod: doc.updated,
		})
	}

	sitemap.end()

	return streamToPromise(sitemap)
})
