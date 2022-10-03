import { FC, ReactNode, useContext } from 'react'

import { CMSContext } from '@/providers/MainProvider'

import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	const {
		home: { backgroundImage },
	} = useContext(CMSContext)

	const background = `url('https:${backgroundImage?.fields.file.url}') center/cover  no-repeat`

	return (
		<div className={styles.layout} style={{ background }}>
			<Header />
			<main>{children}</main>
		</div>
	)
}

export default Layout
