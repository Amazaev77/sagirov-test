import type { GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import Home from '@/components/screens/home/Home'

import MainProvider from '@/providers/MainProvider'

import {
	IBenefits,
	IBenefitsFields,
	IHome,
	IHomeFields,
	IMenu,
	IMenuFields,
} from '../contentful'
import client from '../contentful/index'

interface IHomePage {
	home: IHome
	benefits: IBenefits
	menu: IMenu
}

const HomePage: NextPage<IHomePage> = ({ home, benefits, menu }) => {
	return (
		<MainProvider
			cmsFields={{
				home: home.fields,
				benefits: benefits.fields,
				menu: menu.fields,
			}}
		>
			<Layout>
				<Home />
			</Layout>
		</MainProvider>
	)
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
	const home = await client.getEntries<IHomeFields>({
		content_type: 'home',
		limit: 1,
	})

	const benefits = await client.getEntries<IBenefitsFields>({
		content_type: 'benefits',
		limit: 1,
	})

	const menu = await client.getEntries<IMenuFields>({
		content_type: 'menu',
		limit: 1,
	})

	return {
		props: {
			home: home.items[0],
			benefits: benefits.items[0],
			menu: menu.items[0],
		},
	}
}
