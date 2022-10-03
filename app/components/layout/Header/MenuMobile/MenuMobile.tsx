import cn from 'classnames'
import Link from 'next/link'
import { FC, useContext, useRef, useState } from 'react'

import useOnClickOutside from '@/hooks/useOutsideClick'

import { CMSContext } from '@/providers/MainProvider'

import styles from './MenuMobile.module.scss'

const MenuMobile: FC = () => {
	const { menu } = useContext(CMSContext)
	const [opened, setOpened] = useState(false)

	const ref = useRef(null)

	const handleClose = () => setOpened(false)

	useOnClickOutside(ref, handleClose)

	const handleOpen = () => {
		setOpened(!opened)
	}

	return (
		<div className={styles.wrap}>
			<div className={styles.hamburger} onClick={handleOpen}>
				<div />
				<div />
				<div />
			</div>
			<nav ref={ref} className={cn(styles.list, { [styles.opened]: opened })}>
				<ul>
					{menu.map((item) => (
						<li className={styles.list_item} key={item.link}>
							<Link href={item.link}>
								<a className={styles.list_item_link}>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default MenuMobile
