import { useLightModeContext } from '../context/LightModeContext';

export const useAnimatedStyle = () => {
	const { lightMode, animating } = useLightModeContext();

	return {
		fontFamily: lightMode ? "'Roboto', sans-serif" : "'Fira Mono', monospace",
		transformOrigin: 'center' as const,
		transform: animating ? 'scaleX(0)' : 'scaleX(1)',
		transition: 'transform 0.25s ease, font-family 0.25s ease',
	};
};
