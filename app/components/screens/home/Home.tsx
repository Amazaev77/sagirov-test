import { FC, useContext } from 'react'

import Cards from '@/components/screens/home/Cards/Cards'

import Button from '@/ui/button/Button'

import useWindowSize from '@/hooks/useWindowSize'

import { CMSContext } from '@/providers/MainProvider'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'

const Home: FC = () => {
	const { width } = useWindowSize()
	const { home } = useContext(CMSContext)

	return (
		<Meta>
			<div className={styles.wrap}>
				<div className={styles.home}>
					<div className={styles.travel}>
						<div className={styles.title}>
							<div className={styles.title_big}>{home.title}</div>
							<div className={styles.title_small}>{home.subTitle}</div>
						</div>
						<div className={styles.startTravel}>
							<div className={styles.button}>
								<Button>{home.button}</Button>
							</div>
							<div className={styles.divider}>
								<div />
							</div>
						</div>
					</div>
					<div className={styles.benefits}>
						<Cards />
					</div>
					{width && width < 992 && <Button>Начать путешествие</Button>}
				</div>
			</div>
		</Meta>
	)
}

export default Home
