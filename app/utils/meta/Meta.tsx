import Head from 'next/head'
import { FC, ReactNode } from 'react'

const Meta: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Head>
				<title>SpaceX</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
		</>
	)
}

export default Meta
