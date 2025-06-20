import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds: string[]) => {
	const [activeSection, setActiveSection] = useState(sectionIds[0]);

	useEffect(() => {
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight / 3;

			for (let i = sectionIds.length - 1; i >= 0; i--) {
				const section = document.getElementById(sectionIds[i]);
				if (section && section.offsetTop <= scrollPos) {
					setActiveSection(sectionIds[i]);
					break;
				}
			}
		};

		window.addEventListener('scroll', onScroll);

		onScroll();

		return () => window.removeEventListener('scroll', onScroll);
	}, [sectionIds]);

	return activeSection;
};

export default useActiveSection;
