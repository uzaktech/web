"use client"

import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

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

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.altKey && e.key?.toLowerCase() === 'm') {
				e.preventDefault();
				setVisibility(true);
			}
			if (e.key?.toLowerCase() === "escape" && visibility == true) {
				e.preventDefault();
				setVisibility(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [visibility]);

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