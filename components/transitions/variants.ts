'use client';

export const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.4, 0, 0.2, 1],
		},
	},
	hover: {
		y: -5,
		transition: {
			duration: 0.2,
			ease: 'easeOut',
		},
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: {
			duration: 0.3,
			ease: 'easeIn',
		},
	},
};
