'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ComingSoon() {
	return (
		<div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center"
			>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
				>
					Coming Soon
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="mb-8 text-lg text-muted-foreground sm:text-xl"
				>
					We&apos;re working on something amazing. Stay tuned!
				</motion.p>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
					<Button size="lg" className="group">
						Contact Us
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</motion.div>
			</motion.div>
		</div>
	);
}
