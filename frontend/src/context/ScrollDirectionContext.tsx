import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ScrollDirectionContext = createContext<'up' | 'down'>('down');

export const useScrollDirection = () => useContext(ScrollDirectionContext);

export const ScrollDirectionProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [direction, setDirection] = useState<'up' | 'down'>('down');
	const lastScrollY = useRef(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			setDirection(currentY > lastScrollY.current ? 'down' : 'up');
			lastScrollY.current = currentY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<ScrollDirectionContext.Provider value={direction}>
			{children}
		</ScrollDirectionContext.Provider>
	);
};
