'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const TextGenerateEffect = ({ words }: { words: string }): JSX.Element => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: 1,
			transition: { duration: 0.5, staggerChildren: 0.1 },
		});
	}, [controls]);

	return (
		<motion.div className="text-3xl font-bold" initial={{ opacity: 0 }} animate={controls}>
			{words.split('').map((char, i) => (
				<motion.span
					key={i}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: i * 0.05 }}
				>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};
