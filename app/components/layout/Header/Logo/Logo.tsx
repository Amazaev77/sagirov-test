import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext } from 'react'

import { CMSContext } from '@/providers/MainProvider'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	const { home } = useContext(CMSContext)

	return (
		<div className={styles.logo}>
			<div className={styles.angle_leftTop} />
			<div className={styles.angle_rightTop} />
			<div className={styles.angle_leftBottom} />
			<div className={styles.angle_rightBottom} />
			<Link href="/">
				<a className={styles.link}>
					<Image
						src={`https:${home.logo?.fields.file.url as string}`}
						width={274}
						height={34}
						alt="SpaceX"
						className={styles.image}
					/>
				</a>
			</Link>
		</div>
	)
}

export default Logo
