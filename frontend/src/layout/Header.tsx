import { useLightModeContext } from '../context/LightModeContext';

import { FiSun, FiMoon } from 'react-icons/fi';
import useActiveSection from '../hooks/useActiveSection';
import HamburgerMenu from '../components/HamburgerMenu';
import { useEffect, useState } from 'react';

const Header = () => {
	const { lightMode, toggleLightMode, animating } = useLightModeContext();
	const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
	const activeSection = useActiveSection(sectionIds);

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const links = [
		{ href: '#', label: 'Start', section: 'hero' },
		{ href: '#about', label: 'About', section: 'about' },
		{ href: '#skills', label: 'Skills', section: 'skills' },
		{ href: '#projects', label: 'Projects', section: 'projects' },
		{ href: '#contact', label: 'Contact', section: 'contact' },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300
    ${
			scrolled
				? 'bg-gradient-to-b from-white/90 to-transparent dark:from-gray-900/90 dark:to-transparent'
				: ''
		}`}
		>
			<div className='container mx-auto flex items-center justify-between p-2 md:p-4'>
				<div className='w-8' />

				<nav className=' hidden md:flex flex-row space-x-8 lg:space-x-16 xl:space-x-24 text-lg font-semibold mx-auto items-center'>
					<a
						style={{
							fontFamily: lightMode
								? "'Roboto', sans-serif"
								: "'Fira Mono', monospace",
							transformOrigin: 'center',
							transform: animating ? 'scaleX(0)' : 'scaleX(1)',
							transition: 'transform 0.25s ease, font-family 0.25s ease',
						}}
						href='#'
						className={`hover:text-indigo-500 dark:hover:text-yellow-400 transition ${
							activeSection === 'hero'
								? 'text-indigo-600 dark:text-yellow-300 font-bold'
								: 'text-black dark:text-white'
						}`}
					>
						Start
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
						href='#about'
						className={`hover:text-indigo-500 dark:hover:text-yellow-400 transition ${
							activeSection === 'about'
								? 'text-indigo-600 dark:text-yellow-300 font-bold'
								: 'text-black dark:text-white'
						}`}
					>
						About
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
						href='#skills'
						className={`hover:text-indigo-500 dark:hover:text-yellow-400 transition ${
							activeSection === 'skills'
								? 'text-indigo-600 dark:text-yellow-300 font-bold'
								: 'text-black dark:text-white'
						}`}
					>
						Skills
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
						href='#projects'
						className={`hover:text-indigo-500 dark:hover:text-yellow-400 transition ${
							activeSection === 'projects'
								? 'text-indigo-600 dark:text-yellow-300 font-bold'
								: 'text-black dark:text-white'
						}`}
					>
						Projects
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
						href='#contact'
						className={`hover:text-indigo-500 dark:hover:text-yellow-400 transition ${
							activeSection === 'contact'
								? 'text-indigo-600 dark:text-yellow-300 font-bold'
								: 'text-black dark:text-white'
						}`}
					>
						Contact
					</a>
				</nav>
				<div className='flex flex-col items-end md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2'>
					<HamburgerMenu links={links} activeSection={activeSection} />

					<button
						onClick={toggleLightMode}
						className='text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition'
						aria-label='Toggle light mode'
					>
						<div
							className={`transform-origin-left transition-transform duration-300 ${
								animating ? 'scale-x-0' : 'scale-x-100'
							}`}
							style={{ display: 'inline-block' }}
						>
							{lightMode ? (
								<FiMoon className='text-indigo-500' size={25} />
							) : (
								<FiSun className='text-yellow-400' size={25} />
							)}
						</div>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
