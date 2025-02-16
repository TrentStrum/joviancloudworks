import type { ProjectFact } from '@/types/project.types';
import { Grid } from './Grid';


export function FactCard({ fact }: { fact: ProjectFact }): JSX.Element {
	return (
		<div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
			<Grid size={20} />

			<p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
				{fact.title}
			</p>
			<p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
				{fact.description}

			</p>
		</div>
	);
} 