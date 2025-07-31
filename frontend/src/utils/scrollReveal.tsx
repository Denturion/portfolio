import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, type ReactNode } from 'react';
import { useScrollDirection } from '../context/ScrollDirectionContext';

interface ScrollRevealProps {
	children: ReactNode;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.2 });
	const globalDirection = useScrollDirection();
	const [localDirection, setLocalDirection] = useState<'up' | 'down'>(
		globalDirection
	);

	useEffect(() => {
		if (inView) {
			setLocalDirection(globalDirection);
		}
	}, [inView, globalDirection]);

	const yValue = localDirection === 'up' ? 200 : -200;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: yValue }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yValue }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
};

export default ScrollReveal;
