import { TravelLogTypes } from '../types'

export const noviSad: TravelLogTypes = {
	location: 'Novi Sad, Serbia',
	image: 'travel-log/novi-sad.webp',
	title: 'Serbian Athens',
	description: [
		"Locked down in the 2021 European Capital of Culture for our first proper winter with some of the most hospitable people we've come across - and some seriously delicious, organic farmers markets.",
		'The well planned city layout and readily available healthy vegan food make Novi Sad most preferable as an almost-perfect home-base rather than just a short holiday destination.',
	],
	relatedArticles: [
		{
			text: 'The Vegan Guide to Novi Sad',
			link: 'novi-sad-guide',
		},
		{
			text: 'The Surprising Benefits of Vegan Un-Friendly Cities',
			link: 'no-vegan-options',
		},
	],
	costOfLiving: [
		{ text: '600 AUD / month' },
		{
			text: '64% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Bulgaria&city2=Plovdiv&amount=600&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '4 / 5 - Great',
		link: 'https://www.happycow.net/searchmap?lat=&lng=&location=novi+sad',
	},
	nomadScore: {
		text: '3.9 / 5 - Great',
		link: 'https://nomadlist.com/novi-sad-serbia',
	},
}
