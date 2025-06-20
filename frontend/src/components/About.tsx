import { useLightModeContext } from '../context/LightModeContext';

const About = () => {
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
			<h2 className='text-3xl md:text-5xl font-bold mb-6'>About me</h2>
			<p className='text-base md:text-xl'>
				I am a passionate developer who enjoys building modern web applications
				using React, TypeScript, and Tailwind CSS.
			</p>
		</div>
	);
};

export default About;
