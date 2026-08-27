"use client"

import { createContext, FC, ReactNode, useContext, useState } from 'react';

export type MenuContextType = {
	setVisibility: (b: boolean) => void,
	visibility: boolean
}

export type MenuProviderType = {
	children: ReactNode, 
};

export const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider: FC<MenuProviderType> = ({ children }) => {
	const [visibility, setVisibility] = useState<boolean>(false);

	return (
		<MenuContext.Provider value={{setVisibility, visibility}}>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenu = () => {
	const context = useContext(MenuContext);

	if (!context) throw new Error("useMenu must be used within an MenuProvider");
	else return context;
};