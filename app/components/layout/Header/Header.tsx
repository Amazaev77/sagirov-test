import { FC } from 'react'

import Logo from '@/components/layout/Header/Logo/Logo'
import Menu from '@/components/layout/Header/Menu/Menu'

import useWindowSize from '@/hooks/useWindowSize'

import styles from './Header.module.scss'
import MenuMobile from './MenuMobile/MenuMobile'

const Header: FC = () => {
	const { width } = useWindowSize()

	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<Logo />
				{width && width >= 992 && <Menu />}
				{width && width <= 991 && <MenuMobile />}
			</div>
		</header>
	)
}

export default Header
