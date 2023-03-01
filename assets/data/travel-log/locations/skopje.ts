import { TravelLogTypes } from '../types'

export const skopje: TravelLogTypes = {
	location: 'Skopjé, Macedonia',
	image: 'travel-log/skopje.webp',
	title: 'The City of Statues',
	description: [
		"Only marginally more entertaining than it's nickname would suggest, it's not really too surprising that the City of Statues is one of the smallest capitals in Europe.",
		'Aside from hosting what is easily <a href="https://www.happycow.net/reviews/harmony-skopje-34196">one of the best</a> (and smallest) vegan restaurants we\'ve been to in Eastern Europe, we didn\'t find the home-city of Alexander the Great all that... great.',
	],
	costOfLiving: [
		{ text: '600 AUD / month' },
		{
			text: '65% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Macedonia&city2=Skopje&amount=1%2C000.00&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '2.8 / 5 - Good',
		link: 'https://www.happycow.net/europe/macedonia/skopje/',
	},
	nomadScore: {
		text: '3.7 / 5 - Good',
		link: 'https://nomadlist.com/skopje-macedonia',
	},
}
