import React from 'react';
import type { ProjectFeature } from '@/types/project.types';
import { SkeletonOne } from '@/components/features/skeletons/skeleton-one';
import { SkeletonTwo } from '@/components/features/skeletons/skeleton-two';
import { SkeletonThree } from '@/components/features/skeletons/skeleton-three';
import { SkeletonFour } from '@/components/features/skeletons/skeleton-four';
import { BentoCard, BentoTitle, BentoDescription } from './BentoCard';

const SKELETON_MAP = {
	1: <SkeletonOne />,
	2: <SkeletonTwo />,
	3: <SkeletonThree />,
	4: <SkeletonFour />,
};

const GRID_CLASSES = {
	1: 'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
	2: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
	3: 'col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800',
	4: 'col-span-1 lg:col-span-3 border-b lg:border-none',
};

export function ProjectFeatureBento({ projectFeatures }: { projectFeatures: ProjectFeature[] }) {
	if (!projectFeatures?.length) return null;

	return (
		<div className="relative">
			<div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
				{projectFeatures.map((feature) => (
					<BentoCard key={feature.id} className={GRID_CLASSES[feature.position as 1 | 2 | 3 | 4]}>
						<BentoTitle>{feature.title}</BentoTitle>
						<BentoDescription>{feature.description}</BentoDescription>
						<div className="h-full w-full">{SKELETON_MAP[feature.position as 1 | 2 | 3 | 4]}</div>
					</BentoCard>
				))}
			</div>
		</div>
	);
}
