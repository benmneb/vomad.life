import { TravelLogTypes } from '../types'

export const krakow: TravelLogTypes = {
	location: 'Kraków, Poland',
	image: 'travel-log/krakow.webp',
	title: 'East Meets West',
	description: [
		'The liveliness of this historically-scarred Central European city is almost kept secret by the relaxing public garden that encircles it.',
		"Inside, the very walkable Old Town is filled with some of the friendliest Europeans we've met to date, and some awesome Jazz music. We'll be back for more Kraków, I guarantee you.",
	],
	costOfLiving: [
		{ text: '800 AUD / month' },
		{
			text: '52% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Poland&city2=Krakow+%28Cracow%29&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3.7 / 5 - Good',
		link: 'https://www.happycow.net/searchmap/?kw=&location=Krakow%2C+Poland&vegan=true&vegetarian=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '3.9 / 5 - Great',
		link: 'https://nomadlist.com/krakow-poland',
	},
}
