import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { useLightModeContext } from '../context/LightModeContext';

const Hero = () => {
	const { lightMode, animating } = useLightModeContext();

	const textStyle = {
		fontFamily: lightMode ? "'Roboto', sans-serif" : "'Fira Mono', monospace",
		transformOrigin: 'center',
		transform: animating ? 'scaleX(0)' : 'scaleX(1)',
		transition: 'transform 0.25s ease, font-family 0.25s ease',
	};

	const [text] = useTypewriter({
		words: [
			'solving problems.',
			'writing clean code.',
			'designing.',
			'building great UX.',
			'playing heavy riffs.',
		],
		loop: true,
		typeSpeed: 70,
		deleteSpeed: 50,
		delaySpeed: 1500,
	});

	return (
		<section className='w-full flex items-center justify-center'>
			{/* Left: Text */}
			<div className='w-full max-w-xl px-2 py-12 flex flex-col '>
				<h1 className='text-3xl md:text-3xl font-bold mb-4' style={textStyle}>
					Turning ideas into elegant code.
				</h1>
				<p className='text-base md:text-xl mb-6' style={textStyle}>
					I'm David, a fullstack developer passionate about crafting intuitive
					user experiences and clean, maintainable code. From interactive
					frontends to robust backends, I build high-quality digital solutions
					with a design-first mindset.
				</p>
				<p className='text-lg md:text-xl font-semibold mt-2' style={textStyle}>
					I enjoy{' '}
					<span className='text-indigo-600 dark:text-yellow-300'>{text}</span>
					<Cursor />
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
