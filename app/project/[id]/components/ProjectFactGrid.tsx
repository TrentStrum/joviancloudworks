import React from 'react';
import type { ProjectFact } from '@/types/project.types';
import { FactCard } from './FactCard';


export function ProjectFactsGrid({
	projectFacts,
}: {
	projectFacts: ProjectFact[];
}): JSX.Element | null {
	if (!projectFacts?.length) return null;

	return (
		<div className="py-20 lg:py-40">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
				{projectFacts?.map((fact) => <FactCard key={fact.title} fact={fact} />)}
			</div>
		</div>
	);
}
