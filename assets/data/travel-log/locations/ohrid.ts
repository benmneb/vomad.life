import { TravelLogTypes } from '../types'

export const ohrid: TravelLogTypes = {
	location: 'Ohrid, Macedonia',
	image: 'travel-log/ohrid.webp',
	title: 'The Balkans Best?',
	description: [
		'The relaxing vibes of the UNESCO World Heritage protected Lake Ohrid make this small town an ancient treat that is not to be passed on.',
		'It holds the best views of the best bay from one of the best Old Towns in the whole Balkans. The only thing this majestic mountain getaway needed when we were there was more than <a href="https://www.happycow.net/reviews/dr-falafel-macedonia-58699">one veg restaurant</a>.',
	],
	costOfLiving: [
		{ text: '550 AUD / month' },
		{
			text: '70% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Macedonia&city2=Ohrid&amount=1%2C000.00&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '1 / 5 - Bad',
		link: 'https://www.happycow.net/europe/macedonia/ohrid/',
	},
	nomadScore: {
		text: '2.5 / 5 - Okay',
	},
}
