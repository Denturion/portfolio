import { useMemo, useState } from 'react';
import { useAnimatedStyle } from '../hooks/useAnimatedStyle';
import ScrollReveal from '../utils/scrollReveal';
import { getScreenshotUrl, PLACEHOLDER_IMAGE } from '../utils/getScreenshot';

interface Project {
	title: string;
	description: string;
	url: string;
	image?: string; // Optional fallback image
	tech?: string[];
}

const PROJECTS: Project[] = [
	{
		title: 'FrameLog',
		description: 'A movie tracking and logging application.',
		url: 'https://myframelog.vercel.app/',
		tech: ['NextJS', 'TypeScript', 'MongoDB', 'Tailwind'],
	},
	{
		title: 'Vanmakt Records',
		description: 'Simple webshop for records.',
		url: 'https://ecommerce-vercel-client.vercel.app/',
		tech: ['React', 'Node.js', 'MongoDB'],
	},
	{
		title: 'Project 3',
		description: 'Another cool project.',
		url: 'https://example.com',
		tech: ['Vue', 'Firebase'],
	},
];

const ProjectCard = ({
	project,
	animatedStyle,
}: {
	project: Project & { screenshotUrl: string };
	animatedStyle: React.CSSProperties;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const combinedStyle = {
		...animatedStyle,
		transform: `${animatedStyle.transform || ''} scale(${isHovered ? 1.05 : 1})`,
	};

	return (
		<a
			href={project.url}
			target='_blank'
			rel='noopener noreferrer'
			className='block rounded-lg shadow-lg transition-transform bg-white dark:bg-gray-900 overflow-hidden'
			style={combinedStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='relative w-full h-48 bg-gray-200 dark:bg-gray-800'>
				<img
					src={project.screenshotUrl}
					alt={`${project.title} preview`}
					className='w-full h-full object-cover'
					loading='lazy'
					onError={(e) => {
						const target = e.target as HTMLImageElement;
						if (target.src !== PLACEHOLDER_IMAGE) {
							target.src = project.image || PLACEHOLDER_IMAGE;
						}
					}}
				/>
			</div>
			<div className='p-4'>
				<h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
				<p className='text-base text-gray-600 dark:text-gray-300 mb-3'>
					{project.description}
				</p>
				{project.tech && (
					<div className='flex flex-wrap gap-2'>
						{project.tech.map((tech, i) => (
							<span
								key={i}
								className='text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
							>
								{tech}
							</span>
						))}
					</div>
				)}
			</div>
		</a>
	);
};

const Projects = () => {
	const animatedStyle = useAnimatedStyle();

	// Memoize screenshot URLs to prevent re-fetching on every render
	const projectsWithScreenshots = useMemo(() => {
		return PROJECTS.map((project) => ({
			...project,
			screenshotUrl: getScreenshotUrl(project.url, project.image),
		}));
	}, []);

	return (
		<div>
			<ScrollReveal>
				<h2
					style={animatedStyle}
					className='text-3xl md:text-5xl text-center font-bold mb-16'
				>
					Projects
				</h2>
			</ScrollReveal>
			<ScrollReveal>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{projectsWithScreenshots.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							animatedStyle={animatedStyle}
						/>
					))}
				</div>
			</ScrollReveal>
		</div>
	);
};

export default Projects;
