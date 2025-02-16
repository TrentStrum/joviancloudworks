'use client';

import { useProject } from '@/hooks/react-query/use-projects';
import { ProjectFeatureBento } from './components/ProjectFeatureBento';
import { ProjectFactsGrid } from './components/ProjectFactGrid';
import { generateProjectMetadata } from '@/lib/metadata';

export const generateMetadata = () => generateProjectMetadata({ id: 'Features' });

export default function ProjectPage({ params }: { params: { id: string } }): JSX.Element {
	const { data: project, isLoading } = useProject(params.id);
	
	if (isLoading) return <div>Loading...</div>;
	if (!project) return <div>Project not found</div>;
	
	return (
		<main className="min-h-screen bg-white dark:bg-black">
			<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
				<div className="px-8">
					<h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
						{project.title} Features
					</h4>
					<p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
						{project.description}
					</p>
				</div>
				<ProjectFeatureBento projectFeatures={project.features ?? []} />
			</div>
			<ProjectFactsGrid projectFacts={project.facts ?? []} />
		</main>
	);
}
