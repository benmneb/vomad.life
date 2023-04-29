import { TravelLogTypes } from '../types'

export const plovdiv: TravelLogTypes = {
	location: 'Plovdiv, Bulgaria',
	image: 'travel-log/plovdiv.webp',
	title: '8000 Years of History',
	description: [
		'Our first European autumn was spent with much enjoyment in one of the oldest cities on Earth, with very acceptable pre-winter weather.',
		'The size and tempo of this 340,000 person city is surprisingly reminiscent of home. But less than half the price.',
	],
	relatedArticles: [
		{
			text: "The Vegan's Survival Guide to Plovdiv, Bulgaria",
			link: 'plovdiv-guide',
		},
		{
			text: 'The Surprising Benefits of Vegan Un-Friendly Cities',
			link: 'no-vegan-options',
		},
	],
	costOfLiving: [
		{ text: '600 AUD / month' },
		{
			text: '64% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Bulgaria&city2=Plovdiv&amount=600&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '2 / 5 - Poor',
		link: 'https://www.happycow.net/searchmap?lat=&lng=&location=Plovdiv%2C+Bulgaria',
	},
	nomadScore: {
		text: '4.3 / 5 - Great',
		link: 'https://nomadlist.com/plovdiv-bulgaria',
	},
}
