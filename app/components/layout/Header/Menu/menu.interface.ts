type links =
	| '/'
	| '/technology'
	| '/schedule'
	| '/guarantee'
	| '/about'
	| '/contacts'

export interface IMenuItem {
	link: links
	title: string
}
