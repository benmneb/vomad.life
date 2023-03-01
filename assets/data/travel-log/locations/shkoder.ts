import { TravelLogTypes } from '../types'

export const shkoder: TravelLogTypes = {
	location: 'Shkodër, Albania',
	image: 'travel-log/shkoder.webp',
	title: 'Sleepy Shkodra',
	description: [
		'Whichever way you want to pronounce it, there is really not much going on in this 77,000 person city, especially in the midst of winter. The most activity we saw was from the steady flow of unusually-friendly street-dogs.',
		"This made us grateful that Albania is still Europe's largest supplier of outdoor grown cannabis.",
	],
	costOfLiving: [
		{ text: '600 AUD / month' },
		{
			text: '65% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Albania&city2=Shkoder&amount=1%2C000.00&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '2 / 5 - Poor',
		link: 'https://www.happycow.net/europe/albania/shkoder/',
	},
	nomadScore: {
		text: '2 / 5 - Okay',
	},
}
