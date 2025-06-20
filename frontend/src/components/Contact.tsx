import { useLightModeContext } from '../context/LightModeContext';

const Contact = () => {
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
			<h2 className='text-3xl md:text-5xl font-bold mb-4'>Contact</h2>
		</div>
	);
};

export default Contact;
