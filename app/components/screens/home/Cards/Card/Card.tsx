import { FC } from 'react'

import { IBenefit } from '@/components/screens/home/Cards/Cards'

import styles from './Card.module.scss'

interface ICard {
	card: IBenefit
}

const Card: FC<ICard> = ({ card }) => {
	const { topText, bottomText, number, year, percent } = card

	return (
		<div className={styles.card}>
			<div className={styles.topText}>{topText}</div>
			<div className={styles.number}>
				{number && number}
				{year && (
					<span className={styles.year}>
						{year}
						<span>г.</span>
					</span>
				)}
				{percent && percent}
			</div>
			<div className={styles.bottomText}>{bottomText}</div>
		</div>
	)
}

export default Card
