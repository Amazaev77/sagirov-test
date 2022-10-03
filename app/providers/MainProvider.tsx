import { FC, ReactNode, createContext } from 'react'

import { IMenuItem } from '@/components/layout/Header/Menu/menu.interface'
import { IBenefit } from '@/components/screens/home/Cards/Cards'

import { IBenefitsFields, IHomeFields, IMenuFields } from '../../contentful'

interface IMainProvider {
	children: ReactNode
	cmsFields: {
		home: IHomeFields
		benefits: IBenefitsFields
		menu: IMenuFields
	}
}

interface IContextValue {
	home: IHomeFields
	benefits: IBenefit[]
	menu: IMenuItem[]
}

export const CMSContext = createContext({} as IContextValue)

const MainProvider: FC<IMainProvider> = ({ children, cmsFields }) => {
	const value = {
		home: cmsFields.home,
		benefits: cmsFields.benefits.benefits?.data as IBenefit[],
		menu: cmsFields.menu.menu?.data as IMenuItem[],
	}

	return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>
}

export default MainProvider
