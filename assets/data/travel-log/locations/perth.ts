import { TravelLogTypes } from '../types'

export const perth: TravelLogTypes = {
	location: 'Perth, Australia',
	image: 'travel-log/perth.webp',
	title: 'Where it all began',
	description: [
		'Home sweet home that we had to leave behind in order to find the rest of the world.',
		"Even as the second most isolated capital city in the world, the Western Australian metropolis and it's world class beaches still attract many international backpackers every summer.",
	],
	relatedArticles: [
		{
			text: 'Travellers Vegan Guide to Perth',
			link: 'travellers-guide-to-perth',
		},
		{
			text: 'Complete Vegan Guide to Perth',
			link: 'perth',
		},
	],
	costOfLiving: [{ text: '1700 AUD / month' }],
	veganScore: {
		text: '3.8 / 5 - Good',
		link: 'https://www.happycow.net/searchmap?kw=&location=Perth,+Western+Australia&vegan=true&vegetarian=true&distance=10&distanceType=mi&limit=81',
	},
	nomadScore: {
		text: '3.3 / 5 - Good',
		link: 'https://nomadlist.com/perth-australia',
	},
}
