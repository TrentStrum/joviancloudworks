'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function CenterLine() {
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
	const yPosition = useTransform(scrollYProgress, [0, 1], ['0%', '50vh']);

	return (
		<motion.div
			style={{ opacity }}
			className="fixed left-1/2 top-[40vh] -translate-x-1/2 pointer-events-none"
		>
			<motion.div
				className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
				style={{
					y: yPosition,
					boxShadow: '0 0 10px 1px hsl(var(--primary))',
				}}
			>
				<div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-[1px] w-[1px] h-60 bg-gradient-to-t from-primary/40 to-transparent" />
			</motion.div>
		</motion.div>
	);
}
