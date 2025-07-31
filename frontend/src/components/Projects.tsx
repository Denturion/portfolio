import { useLightModeContext } from '../context/LightModeContext';

const Projects = () => {
	const { lightMode, animating } = useLightModeContext();
	return (
		<div>
			<h2
				style={{
					fontFamily: lightMode
						? "'Roboto', sans-serif"
						: "'Fira Mono', monospace",
					transformOrigin: 'center',
					transform: animating ? 'scaleX(0)' : 'scaleX(1)',
					transition: 'transform 0.25s ease, font-family 0.25s ease',
				}}
				className='text-3xl md:text-5xl text-center font-bold mb-16'
			>
				Projects
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* Example project card */}
				<a
					style={{
						fontFamily: lightMode
							? "'Roboto', sans-serif"
							: "'Fira Mono', monospace",
						transformOrigin: 'center',
						transform: animating ? 'scaleX(0)' : 'scaleX(1)',
						transition: 'transform 0.25s ease, font-family 0.25s ease',
					}}
					href='https://ecommerce-vercel-client.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='block rounded-lg shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-900'
				>
					<img
						src='Vanmakt.png'
						alt='Vanmakt Records preview'
						className='w-full h-48 object-cover rounded-t-lg'
					/>
					<div className='p-4'>
						<h3 className='text-xl font-semibold mb-2'>Vanmakt Records</h3>
						<p className='text-base text-gray-600 dark:text-gray-300'>
							Simple webshop for records.
						</p>
					</div>
				</a>
				<a
					style={{
						fontFamily: lightMode
							? "'Roboto', sans-serif"
							: "'Fira Mono', monospace",
						transformOrigin: 'center',
						transform: animating ? 'scaleX(0)' : 'scaleX(1)',
						transition: 'transform 0.25s ease, font-family 0.25s ease',
					}}
					href='https://ecommerce-vercel-client.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='block rounded-lg shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-900'
				>
					<img
						src='Vanmakt.png'
						alt='Vanmakt Records preview'
						className='w-full h-48 object-cover rounded-t-lg'
					/>
					<div className='p-4'>
						<h3 className='text-xl font-semibold mb-2'>Vanmakt Records</h3>
						<p className='text-base text-gray-600 dark:text-gray-300'>
							Simple webshop for records.
						</p>
					</div>
				</a>
				<a
					style={{
						fontFamily: lightMode
							? "'Roboto', sans-serif"
							: "'Fira Mono', monospace",
						transformOrigin: 'center',
						transform: animating ? 'scaleX(0)' : 'scaleX(1)',
						transition: 'transform 0.25s ease, font-family 0.25s ease',
					}}
					href='https://ecommerce-vercel-client.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='block rounded-lg shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-900'
				>
					<img
						src='Vanmakt.png'
						alt='Vanmakt Records preview'
						className='w-full h-48 object-cover rounded-t-lg'
					/>
					<div className='p-4'>
						<h3 className='text-xl font-semibold mb-2'>Vanmakt Records</h3>
						<p className='text-base text-gray-600 dark:text-gray-300'>
							Simple webshop for records.
						</p>
					</div>
				</a>
				{/* Repeat for other projects */}
			</div>
		</div>
	);
};

export default Projects;
