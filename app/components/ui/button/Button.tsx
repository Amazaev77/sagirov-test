import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<IButton> = ({ children, ...props }) => {
	return (
		<div className={styles.btnWrap}>
			<button className={styles.button} {...props}>
				{children}
			</button>
			<div className={styles.angle}>
				<div className={styles.angle_rightTop} />
				<div className={styles.angle_leftBottom} />
			</div>
		</div>
	)
}

export default Button
