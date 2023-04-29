import { TravelLogTypes } from '../types'

export const vangVieng: TravelLogTypes = {
	location: 'Vang Vieng, Laos',
	image: 'travel-log/vang-vieng.webp',
	title: 'Riverside Relaxation',
	description: [
		"Another standard issue backpacker stop that, despite having not one vegan restaurant - and only one vegetarian - could easily be called one of Laos' finest destinations.",
		'Our Visa Run of Glory from Chiang Mai to this small, dirt-road laden town flew by in just three short days. Or was it four?',
	],
	costOfLiving: [
		{ text: '800 AUD / month' },
		{
			text: '54% cheaper than Perth, Australia',
		},
	],
	veganScore: {
		text: '1.5 / 5 - Bad',
		link: 'https://www.happycow.net/searchmap/?kw=&location=Vang+Vieng%2C+Laos&vegan=true&vegetarian=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '2 / 5 - Poor',
	},
}
