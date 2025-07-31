import { FiCode } from 'react-icons/fi';
import {
	SiReact,
	SiTypescript,
	SiNodedotjs,
	SiTailwindcss,
	SiCss3,
	SiHtml5,
	SiMongodb,
	SiMysql,
	SiGit,
	SiStripe,
	SiWordpress,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiFigma,
} from 'react-icons/si';
import { useLightModeContext } from '../context/LightModeContext';
import ScrollReveal from '../utils/scrollReveal';

const SkillsIcons = () => {
	const { lightMode, animating } = useLightModeContext();

	const iconStyle = {
		transformOrigin: 'center',
		transform: animating ? 'scaleX(0)' : 'scaleX(1)',
		transition: 'transform 0.25s ease',
		fontSize: '3.5rem', // text-6xl
	};

	const labelStyle = {
		fontFamily: lightMode ? "'Roboto', sans-serif" : "'Fira Mono', monospace",
		transformOrigin: 'center',
		transform: animating ? 'scaleX(0)' : 'scaleX(1)',
		transition: 'transform 0.25s ease, font-family 0.25s ease',
	};

	const devSkills = [
		{
			name: 'React',
			icon: <SiReact className='text-blue-500' style={iconStyle} />,
		},
		{
			name: 'TypeScript',
			icon: <SiTypescript className='text-blue-600' style={iconStyle} />,
		},
		{
			name: 'Node.js',
			icon: <SiNodedotjs className='text-green-600' style={iconStyle} />,
		},
		{
			name: 'Tailwind',
			icon: <SiTailwindcss className='text-teal-400' style={iconStyle} />,
		},
		{
			name: 'CSS3',
			icon: <SiCss3 className='text-blue-700' style={iconStyle} />,
		},
		{
			name: 'HTML5',
			icon: <SiHtml5 className='text-orange-600' style={iconStyle} />,
		},
		{
			name: 'MongoDB',
			icon: <SiMongodb className='text-green-700' style={iconStyle} />,
		},
		{
			name: 'mySQL',
			icon: <SiMysql className='text-blue-500' style={iconStyle} />,
		},
		{
			name: 'Git',
			icon: <SiGit className='text-orange-500' style={iconStyle} />,
		},
		{
			name: 'Stripe',
			icon: <SiStripe className='text-purple-500' style={iconStyle} />,
		},
		{
			name: 'WordPress',
			icon: <SiWordpress className='text-blue-800' style={iconStyle} />,
		},
		{
			name: 'VSC',
			icon: <FiCode className='text-indigo-700' style={iconStyle} />,
		},
	];

	const designSkills = [
		{
			name: 'Photoshop',
			icon: <SiAdobephotoshop className='text-blue-400' style={iconStyle} />,
		},
		{
			name: 'Illustrator',
			icon: (
				<SiAdobeillustrator className='text-orange-400' style={iconStyle} />
			),
		},
		{
			name: 'Figma',
			icon: <SiFigma className='text-pink-500' style={iconStyle} />,
		},
	];

	return (
		<div className='flex flex-col items-center gap-8'>
			{/* First row of dev skills */}
			<ScrollReveal>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-6 justify-items-center'>
					{devSkills.map(({ name, icon }) => (
						<div key={name} className='flex flex-col items-center space-y-1'>
							{icon}
							<span style={labelStyle} className='text-lg font-medium'>
								{name}
							</span>
						</div>
					))}
				</div>
			</ScrollReveal>

			{/* Design skills row */}
			<ScrollReveal>
				<div className='col-span-full flex justify-center mt-4'>
					<span
						style={{
							fontFamily: lightMode
								? "'Roboto', sans-serif"
								: "'Fira Mono', monospace",
							transformOrigin: 'center',
							transform: animating ? 'scaleX(0)' : 'scaleX(1)',
							transition: 'transform 0.25s ease, font-family 0.25s ease',
						}}
						className='text-2xl text-center font-bold mt-5'
					>
						Design Skills
					</span>
				</div>
			</ScrollReveal>
			<ScrollReveal>
				<div className='grid grid-cols-1  md:grid-cols-3 gap-x-10 gap-y-6 justify-items-center '>
					{designSkills.map(({ name, icon }) => (
						<div key={name} className='flex flex-col items-center space-y-1'>
							{icon}
							<span style={labelStyle} className='text-lg font-medium'>
								{name}
							</span>
						</div>
					))}
				</div>
			</ScrollReveal>
		</div>
	);
};

export default SkillsIcons;
