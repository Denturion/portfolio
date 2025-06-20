import { useLightModeContext } from '../context/LightModeContext';

const Hero = () => {
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
			<h1 className='text-3xl md:text-5xl font-bold mb-4'>
				Hi, the name's David!
			</h1>
			<p className='text-base md:text-xl'>
				Fullstack developer with an eye for slick UIs.
			</p>
		</div>
	);
};

export default Hero;
