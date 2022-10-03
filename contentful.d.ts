// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Document } from '@contentful/rich-text-types'
import { Asset, Entry } from 'contentful'

export interface IBenefitsFields {
	/** benefits */
	benefits?: Record<string, any> | undefined
}

export interface IBenefits extends Entry<IBenefitsFields> {
	sys: {
		id: string
		type: string
		createdAt: string
		updatedAt: string
		locale: string
		contentType: {
			sys: {
				id: 'benefits'
				linkType: 'ContentType'
				type: 'Link'
			}
		}
	}
}

export interface IHomeFields {
	/** Logo */
	logo?: Asset | undefined

	/** Заголовок */
	title?: string | undefined

	/** Подзаголовок */
	subTitle?: string | undefined

	/** Button */
	button?: string | undefined

	/** Фон */
	backgroundImage?: Asset | undefined
}

export interface IHome extends Entry<IHomeFields> {
	sys: {
		id: string
		type: string
		createdAt: string
		updatedAt: string
		locale: string
		contentType: {
			sys: {
				id: 'home'
				linkType: 'ContentType'
				type: 'Link'
			}
		}
	}
}

export interface IMenuFields {
	/** Menu */
	menu?: Record<string, any> | undefined
}

export interface IMenu extends Entry<IMenuFields> {
	sys: {
		id: string
		type: string
		createdAt: string
		updatedAt: string
		locale: string
		contentType: {
			sys: {
				id: 'menu'
				linkType: 'ContentType'
				type: 'Link'
			}
		}
	}
}

export type CONTENT_TYPE = 'benefits' | 'home' | 'menu'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'