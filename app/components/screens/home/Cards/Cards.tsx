import { FC, useContext } from 'react'

import Card from '@/components/screens/home/Cards/Card/Card'

import { CMSContext } from '@/providers/MainProvider'

import styles from './Cards.module.scss'

export interface IBenefit {
	id: number
	topText: string
	bottomText: string
	number?: string
	percent?: string
	year?: string
}

const Cards: FC = () => {
	const { benefits } = useContext(CMSContext)

	return (
		<div className={styles.wrap}>
			<div className={styles.cards}>
				{benefits.map((benefit) => (
					<Card key={benefit.id} card={benefit} />
				))}
			</div>
		</div>
	)
}

export default Cards
