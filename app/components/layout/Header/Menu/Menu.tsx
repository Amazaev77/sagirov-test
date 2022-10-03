import { FC, useContext } from 'react'

import { CMSContext } from '@/providers/MainProvider'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const Menu: FC = () => {
	const { menu } = useContext(CMSContext)

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{menu.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
