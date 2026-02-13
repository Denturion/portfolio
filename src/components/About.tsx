import { FiCode, FiMonitor, FiMusic, FiPenTool } from 'react-icons/fi';
import { useLightModeContext } from '../context/LightModeContext';
import { useAnimatedStyle } from '../hooks/useAnimatedStyle';
import ScrollReveal from '../utils/scrollReveal';

const About = () => {
	const { lightMode } = useLightModeContext();
	const animatedStyle = useAnimatedStyle();

	const iconClass = 'text-indigo-600 dark:text-yellow-300 text-2xl';

	return (
		<div>
			<ScrollReveal>
				<h2
					style={animatedStyle}
					className='text-3xl md:text-5xl font-bold text-center mb-16'
				>
					About me
				</h2>
			</ScrollReveal>
			<ScrollReveal>
				<div className='flex flex-col md:flex-row gap-10 items-start md:items-center mb-6'>
					{/* Left: Fun facts list */}
					<ul
						style={animatedStyle}
						className='flex flex-col gap-8 w-full md:w-1/2 h-full justify-between'
					>
						<li className='flex items-center gap-5'>
							<span className={iconClass}>{lightMode ? '💻' : <FiCode />}</span>
							<span className='text-base md:text-2xl'>Fullstack developer</span>
						</li>
						<li className='flex items-center gap-5'>
							<span className={iconClass}>
								{lightMode ? '🎨' : <FiPenTool />}
							</span>
							<span className='text-base md:text-2xl'>
								Design & UX enthusiast
							</span>
						</li>
						<li className='flex items-center gap-5'>
							<span className={iconClass}>
								{lightMode ? '🎸' : <FiMusic />}
							</span>
							<span className='text-base md:text-2xl'>
								Metalhead & guitarist
							</span>
						</li>
						<li className='flex items-center gap-5'>
							<span className={iconClass}>
								{lightMode ? '🎮' : <FiMonitor />}
							</span>
							<span className='text-base md:text-2xl'>Hardcore gamer</span>
						</li>
						<li className='flex items-center gap-5'>
							<span className={iconClass}>
								{lightMode ? '🎬' : <FiMonitor />}
							</span>
							<span className='text-base md:text-2xl'>
								Movie buff & sci-fi lover
							</span>
						</li>
					</ul>
					{/* Right: Text block */}
					<div style={animatedStyle} className='md:w-1/2'>
						<p className='text-base md:text-xl'>
							Hey! I'm a fullstack developer from Falun, Sweden, passionate
							about building things that are both functional and beautiful. My
							main stack includes TypeScript, React, CSS, HTML, and PHP, and I'm
							currently diving into Angular to expand my arsenal. I love working
							across the stack — whether I'm crafting seamless UIs or building
							solid backend logic, I enjoy the challenge of connecting all the
							pieces to create something great.
						</p>
					</div>
				</div>
			</ScrollReveal>
		</div>
	);
};

export default About;
