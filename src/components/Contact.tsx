import { useAnimatedStyle } from '../hooks/useAnimatedStyle';
import ScrollReveal from '../utils/scrollReveal';

const Contact = () => {
	const animatedStyle = useAnimatedStyle();
	return (
		<div className='w-full' style={animatedStyle}>
			<ScrollReveal>
				<h2 className='text-3xl md:text-5xl text-center font-bold mb-16'>
					Contact
				</h2>
			</ScrollReveal>
			<ScrollReveal>
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
			</ScrollReveal>
		</div>
	);
};

export default Contact;
