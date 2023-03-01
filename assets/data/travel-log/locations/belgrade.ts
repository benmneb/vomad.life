import { TravelLogTypes } from '../types'

export const belgrade: TravelLogTypes = {
	location: 'Belgrade, Serbia',
	image: 'travel-log/belgrade.webp',
	title: 'Belgrade, Babes',
	description: [
		"An array of friendly and genetically-gifted locals fill the streets of one of Europe's biggest party destinations seemingly at all times of day and night.",
		'Even though there are strangely no vegan restaurants in Belgrade, there are lots of good vegan options at the vegetarian places in and around the city centre.',
	],
	costOfLiving: [
		{ text: '675 AUD / month' },
		{
			text: '55% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Serbia&city2=Belgrade&amount=1%2C000.00&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3.5 / 5 - Good',
		link: 'https://www.happycow.net/europe/serbia/belgrade/',
	},
	nomadScore: {
		text: '4.4 / 5 - Great',
		link: 'https://nomadlist.com/belgrade-serbia',
	},
}
