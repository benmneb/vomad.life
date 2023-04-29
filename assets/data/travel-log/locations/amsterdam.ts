import { TravelLogTypes } from '../types'

export const amsterdam: TravelLogTypes = {
	location: 'Amsterdam, The Netherlands',
	image: 'travel-log/amsterdam.webp',
	title: 'The City of Freedom',
	description: [
		"Beautifully intoxicating and eternally seductive, The 'Dam draws you in then makes you never want to leave.",
		"Even with it's understandably high prices, Holland's infamously progressive capital city is easily the best I've ever visited.",
	],
	costOfLiving: [
		{ text: '1850 AUD / month' },
		{
			text: '10% more expensive than Perth, Australia',
		},
	],
	veganScore: {
		text: '4.5 / 5 - Great',
		link: 'https://www.happycow.net/searchmap/?kw=&location=Amsterdam%2C+Netherlands&vegan=true&vegetarian=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '3.8 / 5 - Great',
		link: 'https://nomadlist.com/amsterdam-netherlands',
	},
}
