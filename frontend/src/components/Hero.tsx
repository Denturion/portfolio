import { useLightModeContext } from '../context/LightModeContext';

const Hero = () => {
	const { lightMode, animating } = useLightModeContext();

	const textStyle = {
		fontFamily: lightMode ? "'Roboto', sans-serif" : "'Fira Mono', monospace",
		transformOrigin: 'center',
		transform: animating ? 'scaleX(0)' : 'scaleX(1)',
		transition: 'transform 0.25s ease, font-family 0.25s ease',
	};

	return (
		<section className='w-full flex items-center justify-center'>
			<div className='w-full max-w-xl px-4 py-12 flex flex-col '>
				<h1 className='text-3xl md:text-5xl font-bold mb-4' style={textStyle}>
					Hi, I'm David!
				</h1>
				<p className='text-base md:text-xl mb-6' style={textStyle}>
					Fullstack developer with an eye for slick UIs.
				</p>
			</div>
			{/* Right: Image */}
			<div className='relative w-full md:w-1/2 flex justify-center'>
				<div className='clip-diagonal-frame relative p-4 bg-white dark:bg-gray-900 shadow-xl overflow-visible'>
					<div className='clip-diagonal bg-white dark:bg-gray-900'>
						<img
							src='/Profile.jpg'
							alt='David'
							className='w-full max-w-xs h-auto block scale-x-[-1]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
