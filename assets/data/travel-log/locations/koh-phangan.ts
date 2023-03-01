import { TravelLogTypes } from '../types'

export const kohPhangan: TravelLogTypes = {
	location: 'Koh Phangan, Thailand',
	image: 'travel-log/koh-phangan.webp',
	title: 'First Stop: Paradise',
	description: [
		'Vegan heaven on a tropical island that is as beautiful as it is relaxing.',
		'Organic fruit, picturesque sunsets every night, and some of the best weather imaginable all add up to make this southern Thai island truly unforgettable.',
	],
	relatedArticles: [
		{
			text: "The World's First Vegan Island?",
			link: 'delicious-koh-phangan',
		},
	],
	costOfLiving: [
		{ text: '900 AUD / month' },
		{ text: '45% cheaper than Perth, Australia' },
	],
	veganScore: {
		text: '4.5 / 5 - Great',
		link: 'https://www.happycow.net/searchmap/?kw=&location=koh+phangan&vegan=true&vegetarian=true&vegfriendly=true&stores=true&distance=10&distanceType=km',
	},
	nomadScore: {
		text: '3 / 5 - Good',
		link: 'https://nomadlist.com/ko-pha-ngan-thailand',
	},
}
