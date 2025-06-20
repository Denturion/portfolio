import { useLightModeContext } from '../context/LightModeContext';

export const CodeBlock = () => {
	const { lightMode, animating } = useLightModeContext();
	return (
		<div
			style={{
				fontFamily: lightMode
					? "'Roboto', sans-serif"
					: "'Fira Mono', monospace",
				transformOrigin: 'center',
				transform: animating ? 'scaleX(0)' : 'scaleX(1)',
				transition: 'transform 0.25s ease, font-family 0.25s ease',
			}}
		>
			<h2 className='text-2xl md:text-3xl font-bold mb-6'>Codeblock</h2>
		</div>
	);
};
