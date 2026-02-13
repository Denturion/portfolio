import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useScrollDirection } from '../context/ScrollDirectionContext';

interface ScrollRevealProps {
	children: ReactNode;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0 });
	const { direction: globalDirection, hasScrolled } = useScrollDirection();

	// Use global scroll direction directly to decide animation start position
	const yValue = globalDirection === 'down' ? 200 : -200;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: yValue }}
			animate={
				!hasScrolled
					? { opacity: 1, y: 0 }
					: inView
					? { opacity: 1, y: 0 }
					: { opacity: 0, y: yValue }
			}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
};

export default ScrollReveal;
