import { TravelLogTypes } from '../types'

export const berlin: TravelLogTypes = {
	location: 'Berlin, Germany',
	image: 'travel-log/berlin.webp',
	title: 'Vegan Heaven',
	description: [
		"Even being more expensive than what we're used to, our time spent here on our way out of Europe was still regretfully short.",
		"I do not imagine a more vegan friendly city of this size exists anywhere on earth, which makes this bustling, art-infested, open-minded haven even more enticing than almost anywhere else we've been in Europe.",
	],
	costOfLiving: [
		{ text: '1500 AUD / month' },
		{
			text: '10% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Germany&city2=Berlin&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '5 / 5 - Excellent',
		link: 'https://www.happycow.net/searchmap?location=Berlin,%20Germany&vegan=true&vegetarian=true&vegfriendly=true&term=&ft=&chains=true&radius=15&metric=mi&limit=81&order=default&lat=52.5062&lng=13.3296',
	},
	nomadScore: {
		text: '4.3 / 5 - Great',
		link: 'https://nomadlist.com/berlin-germany',
	},
}
