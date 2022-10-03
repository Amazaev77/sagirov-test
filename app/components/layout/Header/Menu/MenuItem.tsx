import Link from 'next/link'
import { FC } from 'react'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				<a className={styles.link}>{item.title}</a>
			</Link>
		</li>
	)
}

export default MenuItem
