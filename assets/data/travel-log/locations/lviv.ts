import { TravelLogTypes } from '../types'

export const lviv: TravelLogTypes = {
	location: 'Lviv, Ukraine',
	image: 'travel-log/lviv.webp',
	title: 'The Chiang Mai of Europe?',
	description: [
		"Instantly charming like no where else we've seen in Eastern Europe, the Old Town is unbelievably dense with unique cafe's, making it perfect for budget digital nomading.",
		'Known as "Little Paris", Ukraine\'s most western city initially surprised us as to how similar to Thailand it is - except for the thinner range of vegan food.',
	],
	relatedArticles: [
		{
			text: 'The Surprising Benefits of Vegan Un-Friendly Cities',
			link: 'no-vegan-options',
		},
	],
	costOfLiving: [
		{ text: '660 AUD / month' },
		{
			text: '68% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Ukraine&city2=Lviv&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '3 / 5 - Okay',
		link: 'https://www.happycow.net/searchmap?location=Lviv,%20Ukraine&vegan=true&vegetarian=true&vegfriendly=true&bakery=false&bnb=false&catering=false&delivery=false&farmers=false&health=false&organization=false&other=false&vegshop=false&term=&ft=&radius=15&metric=km&limit=81&order=rating&lat=49.8397&lng=24.0297',
	},
	nomadScore: {
		text: '4.5 / 5 - Great',
		link: 'https://nomadlist.com/lviv-ukraine',
	},
}
