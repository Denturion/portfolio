import { useAnimatedStyle } from '../hooks/useAnimatedStyle';
import ScrollReveal from '../utils/scrollReveal';
import SkillsIcons from './SkillsIcons';

export default function Skills() {
	const animatedStyle = useAnimatedStyle();
	return (
		<div>
			<ScrollReveal>
				<h2
					style={animatedStyle}
					className='text-3xl md:text-5xl text-center font-bold mb-16'
				>
					Skills
				</h2>
			</ScrollReveal>
			<SkillsIcons />
		</div>
	);
}
