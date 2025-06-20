import { useState } from 'react';

interface Props {
	links: { href: string; label: string; section: string }[];
	activeSection: string;
}

const HamburgerMenu = ({ links, activeSection }: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<div className='md:hidden'>
			<button
				className='p-2'
				onClick={() => setOpen((o) => !o)}
				aria-label='Open navigation menu'
			>
				<span className='block w-6 h-0.5 bg-current mb-1'></span>
				<span className='block w-6 h-0.5 bg-current mb-1'></span>
				<span className='block w-6 h-0.5 bg-current'></span>
			</button>
			{open && (
				<div className='absolute top-14 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col items-center space-y-4 py-4'>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`text-lg font-semibold ${
								activeSection === link.section
									? 'text-indigo-600 dark:text-yellow-300 font-bold'
									: 'text-black dark:text-white'
							}`}
							onClick={() => setOpen(false)}
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
