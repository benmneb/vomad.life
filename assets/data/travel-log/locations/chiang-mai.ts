import { TravelLogTypes } from '../types'

export const chiangMai: TravelLogTypes = {
	location: 'Chiang Mai, Thailand',
	image: 'travel-log/chiang-mai.webp',
	title: 'Digital Nomad HQ',
	description: [
		'Northern Thailand is home to the peaceful, irresistibly vegan-friendly city that is most likely the World Capital of Digital Nomads.',
		"Affordable and instantly liveable, with some of the friendliest, most welcoming locals I've ever met. And the best food.",
	],
	relatedArticles: [
		{
			text: 'The Best of the Best: All Vegan Guide to Chiang Mai, Thailand',
			link: 'chiang-mai-food',
		},
	],
	costOfLiving: [
		{ text: '800 AUD / month' },
		{
			text: '54% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Thailand&city1=Chiang+Mai&country2=Australia&city2=Perth&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '4.8 / 5 - Excellent',
		link: 'https://www.happycow.net/searchmap/?s=3&location=Chiang+Mai%252C+Thailand',
	},
	nomadScore: {
		text: '4.7 / 5 - Excellent',
		link: 'https://nomadlist.com/chiang-mai-thailand',
	},
}
