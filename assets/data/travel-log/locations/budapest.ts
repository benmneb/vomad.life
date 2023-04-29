import { TravelLogTypes } from '../types'

export const budapest: TravelLogTypes = {
	location: 'Budapest, Hungary',
	image: 'travel-log/budapest.webp',
	title: 'Roman Baths & Romantic Bridges',
	description: [
		'And falafels. Good falafels. But not much else.',
		'Though expansive and bustling, with nightlife any way you want it, the Hungarian capital still left us hungry for more.',
	],
	costOfLiving: [
		{ text: '850 AUD / month' },
		{
			text: '48% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Hungary&city2=Budapest&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3 / 5 - Good',
		link: 'https://www.happycow.net/searchmap/?kw=&location=Budapest%2C+Hungary&vegan=true&vegetarian=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '4.5 / 5 - Great',
		link: 'https://nomadlist.com/plovdiv-bulgaria',
	},
}
