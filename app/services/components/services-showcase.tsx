'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/app/services/components/services-card';
import { useInView } from 'react-intersection-observer';
import { useGetServices } from '@/hooks/react-query/use-services';
import { ServicesSkeleton } from './services-skeleton';
import { Service } from '@/types/service.types';

export function ServicesShowcase() {
	const { ref, inView } = useInView();
	const { data, isLoading, fetchNextPage } = useGetServices();

	if (inView) {
		fetchNextPage();
	}

	if (isLoading) {
		return <ServicesSkeleton />;
	}

	return (
		<motion.div
			className="py-16 md:py-24"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
		>
			<div className="space-y-16 md:space-y-24">
				{data?.pages.map((page, pageIndex) =>
					page.map((service: Service, index: number) => (
						<ServiceCard key={service.id} service={service} index={pageIndex * 3 + index} />
					)),
				)}
			</div>
			<div ref={ref} className="h-16" />
		</motion.div>
	);
}
