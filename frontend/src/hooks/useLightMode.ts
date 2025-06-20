import { useEffect, useState } from 'react';

export const useLightMode = () => {
	const [lightMode, setLightMode] = useState<boolean>(false);
	const [isReady, setIsReady] = useState(false);

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
			setIsReady(true); // markera att vi är klara
		}
	}, []);

	useEffect(() => {
		if (!isReady) return; // vänta tills vi initierat
		const root = document.documentElement;

		if (lightMode) {
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
		}

		localStorage.setItem('lightMode', String(lightMode));
	}, [lightMode, isReady]);

	return [lightMode, setLightMode, isReady] as const;
};
