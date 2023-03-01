import { TravelLogTypes } from '../types'

export const pai: TravelLogTypes = {
	location: 'Pai, Thailand',
	image: 'travel-log/pai.webp',
	title: 'A+ Mountain Getaway',
	description: [
		"Nestled among the mountains of Thailands North-West is a backpackers dream, that any nature lover will easily fall in love with - even if it's only for a weekend.",
		'Grab a scooter and explore some world-class waterfalls and canyons by day, then party or relax the night away with the rest of the care-free travellers that populate this 2,500 person town.',
	],
	costOfLiving: [
		{ text: '700 AUD / month' },
		{
			text: '60% cheaper than Perth, Australia',
		},
	],
	veganScore: {
		text: '4 / 5 - Great',
		link: 'https://www.happycow.net/searchmap/?kw=&location=Pai%2C+Thailand&vegan=true&vegetarian=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '3 / 5 - Great',
		link: 'https://nomadlist.com/pai-thailand',
	},
}
