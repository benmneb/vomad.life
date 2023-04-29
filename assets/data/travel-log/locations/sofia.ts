import { TravelLogTypes } from '../types'

export const sofia: TravelLogTypes = {
	location: 'Sofia, Bulgaria',
	image: 'travel-log/sofia.webp',
	title: '"Sof-iya", not "So-fia"',
	description: [
		'Europe\'s "Most Affordable Capital to Visit" (in 2013) is much more happening than it\'s little cousin, Plovdiv, featured above, and still with constant human habitation since at least 7000 BC.',
		'The Bulgarian capital has a range of great vegan food and lots of quality cafes to work from, as well as all the other benefits of the biggest city in the country.',
	],
	costOfLiving: [
		{ text: '660 AUD / month' },
		{
			text: '55% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Bulgaria&city2=Sofia&amount=1%2C000.00&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3.8 / 5 - Great',
		link: 'https://www.happycow.net/europe/bulgaria/sofia/',
	},
	nomadScore: {
		text: '4.3 / 5 - Great',
		link: 'https://nomadlist.com/sofia-bulgaria',
	},
}
