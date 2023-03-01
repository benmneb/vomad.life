type TextWithLink = { text: string; link?: string }

export interface TravelLogTypes {
	location: string
	image: string
	title: string
	description: string[]
	relatedArticles?: TextWithLink[]
	costOfLiving: TextWithLink[]
	veganScore: TextWithLink
	nomadScore: TextWithLink
}
