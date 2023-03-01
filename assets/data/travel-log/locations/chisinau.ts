import { TravelLogTypes } from '../types'

export const chisinau: TravelLogTypes = {
	location: 'Chisinau, Moldova',
	image: 'travel-log/chisinau.webp',
	title: 'Crazy Kishinev',
	description: [
		"After the most cramped bus ride of my life, the Republic of Moldova instantly left a good impression on us despite it's thin range of vegan restaurants.",
		'When we weren\'t almost getting scammed with illegally-expensive lap dances or being weirded out by the strangest hostel experience ever, our time was spent eating smoothie bowls at the cities sole (partly-raw) <a href="https://www.happycow.net/reviews/biorganic-raw-cafe-chisinau-69552">veg cafe</a>.',
	],
	costOfLiving: [
		{ text: '630 AUD / month' },
		{
			text: '62% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Moldova&city2=Chisinau&amount=1000&displayCurrency=AUD',
		},
	],
	veganScore: {
		text: '2.4 / 5 - Okay',
		link: 'https://www.happycow.net/searchmap?location=Chisinau,%20Moldova&vegan=true&vegetarian=true&vegfriendly=true&term=&ft=&radius=15&metric=km&limit=81&order=default&lat=47.0105&lng=28.8638',
	},
	nomadScore: {
		text: '3.7 / 5 - Good',
		link: 'https://nomadlist.com/chisinau-moldova',
	},
}
