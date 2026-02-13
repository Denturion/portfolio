import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type LightModeContextType = {
	lightMode: boolean;
	toggleLightMode: () => void;
	animating: boolean;
};

const LightModeContext = createContext<LightModeContextType | undefined>(
	undefined
);

export const LightModeProvider = ({ children }: { children: ReactNode }) => {
	const [lightMode, setLightMode] = useState(false);
	const [animating, setAnimating] = useState(false);
	const [isReady, setIsReady] = useState(false);

	// Initiera från localStorage och html class på mount
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('lightMode');
			const isLight = stored === 'true';
			const root = document.documentElement;

			if (isLight) {
				root.classList.remove('dark');
			} else {
				root.classList.add('dark');
			}

			setLightMode(isLight);
			setIsReady(true);
		}
	}, []);

	// Uppdatera dark-class och localStorage när lightMode ändras
	useEffect(() => {
		if (!isReady) return;

		const root = document.documentElement;

		if (lightMode) {
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
		}

		localStorage.setItem('lightMode', lightMode.toString());
	}, [lightMode, isReady]);

	// Toggle med animation
	const toggleLightMode = () => {
		setAnimating(true);

		setTimeout(() => {
			setLightMode((prev) => !prev);
		}, 300);

		setTimeout(() => {
			setAnimating(false);
		}, 300);
	};

	return (
		<LightModeContext.Provider
			value={{ lightMode, toggleLightMode, animating }}
		>
			{isReady ? children : null}
		</LightModeContext.Provider>
	);
};

// Hook för att använda context
export const useLightModeContext = () => {
	const context = useContext(LightModeContext);
	if (!context) {
		throw new Error(
			'useLightModeContext must be used within a LightModeProvider'
		);
	}
	return context;
};
