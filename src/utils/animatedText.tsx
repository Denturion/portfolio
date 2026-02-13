import { useState } from 'react';

const AnimatedText = () => {
	const [fontToggle, setFontToggle] = useState(false);
	const [animating, setAnimating] = useState(false);

	const toggleFont = () => {
		setAnimating(true);
		// Efter animationen är halvvägs (ca 150ms), byt font
		setTimeout(() => {
			setFontToggle((prev) => !prev);
		}, 250);

		// Efter hela animationen (300ms) avsluta animering
		setTimeout(() => {
			setAnimating(false);
		}, 500);
	};

	return (
		<div>
			<div
				className={`transition-all duration-500 transform origin-left ease ${
					animating ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
				}`}
				style={{
					fontFamily: fontToggle
						? "'Fira Code', monospace"
						: "'Roboto', sans-serif",
				}}
			>
				This text will animate and switch font!
			</div>
			<button
				onClick={toggleFont}
				className='mt-4 px-4 py-2 bg-indigo-600 text-white rounded'
			>
				Toggle Font
			</button>
		</div>
	);
};

export default AnimatedText;
