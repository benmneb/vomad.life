import { TravelLogTypes } from '../types'

export const tirana: TravelLogTypes = {
	location: 'Tirana, Albania',
	image: 'travel-log/tirana.webp',
	title: 'Mixed Emotions',
	description: [
		'Tirana is a Digital Nomad Dream - with a very low cost of living, and the city <a href="https://www.ocnal.com/2018/02/albania-ranked-first-in-world-for.html">apparently</a> having the highest density of cafe\'s in the world.',
		"But it is also a vegan's nightmare - with a surprisingly horrible selection of cruelty-free foods that make even short term stays without a kitchen a little frustrating.",
	],
	costOfLiving: [
		{ text: '700 AUD / month' },
		{
			text: '60% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Poland&city2=Krakow+%28Cracow%29&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '1.5 / 5 - Bad',
		link: 'https://www.happycow.net/europe/albania/tirana/',
	},
	nomadScore: {
		text: '4 / 5 - Great',
		link: 'https://nomadlist.com/tirana-albania',
	},
}
