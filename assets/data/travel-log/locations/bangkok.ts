import { TravelLogTypes } from '../types'

export const bangkok: TravelLogTypes = {
	location: 'Bangkok, Thailand',
	image: 'travel-log/bangkok.webp',
	title: 'Big. Busy. Bangkok.',
	description: [
		'The gateway to South East Asia is, in our opinion, best left closed after you enter.',
		'Even if it is home to what is possibly my <a href="https://www.happycow.net/reviews/ethos-bangkok-10554">favourite veg restaurant</a> in the world, after a week in Thailand\'s capital almost anywhere else starts looking very appealing.',
	],
	costOfLiving: [
		{ text: '1000 AUD / month' },
		{
			text: '37% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Thailand&city1=Bangkok&country2=Australia&city2=Perth&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3.9 / 5 - Great',
		link: 'https://www.happycow.net/searchmap/?kw=&location=Bangkok%2C+Thailand&vegan=true&vegetarian=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '4.4 / 5 - Great',
		link: 'https://nomadlist.com/bangkok-thailand',
	},
}
