import { useLightModeContext } from '../context/LightModeContext';
import SkillsIcons from './SkillsIcons';

export default function Skills() {
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
				Skills
			</h2>
			<SkillsIcons />
		</div>
	);
}
