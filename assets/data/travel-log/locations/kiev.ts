import { TravelLogTypes } from '../types'

export const kiev: TravelLogTypes = {
	location: 'Kiev, Ukraine',
	image: 'travel-log/kiev.webp',
	title: 'Those Ukraine Girls...',
	description: [
		'...They really do leave the West behind. Walking around with <a href="https://youtu.be/BLH1x_SGAL4?t=46s">Beatles songs</a> stuck in my head has never felt so good.',
		"A delicious vegan scene, a buffet of delicious hipsters and an eclectic mix of architecture left us beyond impressed with Ukraine's capital and awaiting our 3 month stay in Lviv with even more excitement.",
	],
	costOfLiving: [
		{ text: '700 AUD / month' },
		{
			text: '62% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Ukraine&city2=Kiev&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '4 / 5 - Great',
		link: 'https://www.happycow.net/searchmap?location=kiev,%20Ukraine&vegan=true&vegetarian=true&vegfriendly=true&bakery=false&bnb=false&catering=false&delivery=false&farmers=false&health=false&organization=false&other=false&vegshop=false&term=&ft=&radius=15&metric=km&limit=81&order=rating&lat=50.4501&lng=30.5234',
	},
	nomadScore: {
		text: '4.7 / 5 - Great',
		link: 'https://nomadlist.com/kiev-ukraine',
	},
}
