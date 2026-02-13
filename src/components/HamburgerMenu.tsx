import { useEffect, useRef, useState } from 'react';

interface Props {
	links: { href: string; label: string; section: string }[];
	activeSection: string;
}

const HamburgerMenu = ({ links, activeSection }: Props) => {
	const [open, setOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open) {
			// Trigger animation after mount
			setTimeout(() => setIsVisible(true), 10);
		} else {
			setIsVisible(false);
		}
	}, [open]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(() => {
			setOpen(false);
		}, 300); // Matcha duration-300 från Tailwind
	};

	useEffect(() => {
		if (!open) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				handleClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [open]);

	return (
		<div className='md:hidden' ref={menuRef}>
			<button
				className='p-2 z-50 relative'
				onClick={() => (open ? handleClose() : setOpen(true))}
				aria-label='Open navigation menu'
			>
				<span
					className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${
						isVisible ? 'rotate-45 translate-y-1.5' : ''
					}`}
				></span>
				<span
					className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${
						isVisible ? 'opacity-0' : ''
					}`}
				></span>
				<span
					className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
						isVisible ? '-rotate-45 -translate-y-1.5' : ''
					}`}
				></span>
			</button>
			{open && (
				<div
					className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40 
					flex flex-col items-center space-y-8 py-20 pb-20
					transition-all duration-300 ease-out
					${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
				>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`text-2xl font-semibold py-2 ${
								activeSection === link.section
									? 'text-indigo-600 dark:text-yellow-300 font-bold'
									: 'text-black dark:text-white'
							}`}
							onClick={() => handleClose()}
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</div>
	);
};

export default HamburgerMenu;
