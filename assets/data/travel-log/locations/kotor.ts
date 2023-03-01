import { TravelLogTypes } from '../types'

export const kotor: TravelLogTypes = {
	location: 'Kotor, Montenegro',
	image: 'travel-log/kotor.webp',
	title: 'Castle-Life',
	description: [
		"Suspiciously similar to Ohrid, mentioned above, you better like veggie pizzas with vegan cheese if you come here, 'cause theres not much other vegan food.",
		"But that's okay, because the picturesque castle - at any time of day - and an unforgettably authentic Old Town experience mean this magnetic tourist destination should be enjoyed by all.",
	],
	costOfLiving: [
		{ text: '700 AUD / month' },
		{
			text: '60% cheaper than Perth, Australia',
			link: 'https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Australia&city1=Perth&country2=Montenegro&city2=Kotor',
		},
	],
	veganScore: {
		text: '1 / 5 - Bad',
		link: 'https://www.happycow.net/searchmap?s=3&location=Kotor%2C+Montenegro&metric=mi&limit=81&order=default&lat=42.42488664278559&lng=18.770786758234667&zoom=16.75&page=1&bb=42.41879315005373%2C18.762621121000926%2C42.430980135517444%2C18.77895239546841&radius=0',
	},
	nomadScore: {
		text: '2.5 / 5 - Okay',
		link: 'https://nomadlist.com/kotor',
	},
}
