import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ScrollDirectionContext = createContext<{
	direction: 'up' | 'down';
	hasScrolled: boolean;
}>({
	direction: 'down',
	hasScrolled: false,
});

export const useScrollDirection = () => useContext(ScrollDirectionContext);

export const ScrollDirectionProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [direction, setDirection] = useState<'up' | 'down'>('down');
	const [hasScrolled, setHasScrolled] = useState(false);
	const lastScrollY = useRef(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			setDirection(currentY > lastScrollY.current ? 'down' : 'up');
			setHasScrolled(true); // ✅ important!
			lastScrollY.current = currentY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<ScrollDirectionContext.Provider value={{ direction, hasScrolled }}>
			{children}
		</ScrollDirectionContext.Provider>
	);
};
