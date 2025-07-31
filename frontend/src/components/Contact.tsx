import { useLightModeContext } from '../context/LightModeContext';

const Contact = () => {
	const { lightMode, animating } = useLightModeContext();
	return (
		<div
			className='w-full'
			style={{
				fontFamily: lightMode
					? "'Roboto', sans-serif"
					: "'Fira Mono', monospace",
				transformOrigin: 'center',
				transform: animating ? 'scaleX(0)' : 'scaleX(1)',
				transition: 'transform 0.25s ease, font-family 0.25s ease',
			}}
		>
			<h2 className='text-3xl md:text-5xl text-center font-bold mb-16'>
				Contact
			</h2>
			<form className='flex flex-col gap-6 w-full md:max-w-lg  mx-auto'>
				<input
					type='text'
					name='name'
					placeholder='Your name'
					className='border rounded px-4 py-2 bg-white dark:bg-gray-900'
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					className='border rounded px-4 py-2 bg-white dark:bg-gray-900'
					required
				/>
				<textarea
					name='message'
					placeholder='Your message'
					className='border rounded px-4 py-2 bg-white dark:bg-gray-900'
					rows={5}
					required
				/>
				<button
					type='submit'
					className='bg-indigo-600 dark:bg-yellow-300 text-white dark:text-gray-900 font-semibold px-6 py-2 rounded hover:scale-105 transition-transform'
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
