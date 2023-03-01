import { TravelLogTypes } from '../types'

export const odessa: TravelLogTypes = {
	location: 'Odessa, Ukraine',
	image: 'travel-log/odessa.webp',
	title: 'What Beach?',
	description: [
		"Coming from Australia has made us into beach-snobs. Being here at the end of winter didn't help either.",
		'But the city itself was very nice, with a central produce market with the best selection of dates I\'ve ever seen. Odessa is also home to one of <a href="https://www.happycow.net/reviews/agharti-odessa-106588">the most unique veg restaurants</a> we\'ve ever seen.',
	],
	costOfLiving: [
		{ text: '680 AUD / month' },
		{
			text: '65% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&country2=Ukraine&city1=Perth&city2=Odessa+%28Odesa%29',
		},
	],
	veganScore: {
		text: '2.7 / 5 - Okay',
		link: 'https://www.happycow.net/searchmap?location=Odessa,%20Ukraine&vegan=true&vegetarian=true&vegfriendly=true&term=&ft=&radius=15&metric=km&limit=81&order=default&lat=46.4825&lng=30.7233',
	},
	nomadScore: {
		text: '2.9 / 5 - Good',
		link: 'https://nomadlist.com/odesa-ukraine',
	},
}
