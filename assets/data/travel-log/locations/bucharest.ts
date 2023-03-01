import { TravelLogTypes } from '../types'

export const bucharest: TravelLogTypes = {
	location: 'Bucharest, Romania',
	image: 'travel-log/bucharest.webp',
	title: 'Book-A-Rest',
	description: [
		"Snowed-in and too-cold-for-comfort, our time in Romania's capital was mostly spent navigating towards warm restaurants beneath beautiful snowfall and too many layers of clothes.",
		'If we ever come back to Romania, it will be in the summer to take advantage of their country side and forget the uninspiring capital city.',
	],
	costOfLiving: [
		{ text: '830 AUD / month' },
		{
			text: '50% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Romania&city2=Bucharest&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3.8 / 5 - Good',
		link: 'https://www.happycow.net/searchmap?location=Bucharest,%20Romania&vegan=true&vegetarian=true&vegfriendly=true&term=&ft=&radius=15&metric=km&limit=81&order=default&lat=44.4323&lng=26.1063',
	},
	nomadScore: {
		text: '4 / 5 - Good',
		link: 'https://nomadlist.com/bucharest-romania',
	},
}
