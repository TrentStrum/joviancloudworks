'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UpcomingProjectCard } from './UpcomingProjectCard';
import { ExistingProjectCard } from './ExistingProjectCard';
import { DotPattern } from '@/components/ui/dot-pattern';
import { useProjects } from '@/hooks/react-query/use-projects';
import { useNotify } from '@/hooks/react-query/use-notify';
import { Project } from '@/types/project.types';


export default function PortfolioPage(): JSX.Element {
	const { data: projects, isLoading } = useProjects();
	const { mutate: notify } = useNotify();

	
	const handleNotify = (email: string, projectId: string): void => {
		notify({ email, projectId });
	};


	if (isLoading) return <div>Loading...</div>;

	const existingProjects = projects?.filter((p: Project) => p.status === 'live') ?? [];
	const upcomingProjects = projects?.filter((p: Project) => p.status === 'upcoming') ?? [];


	return (
		<DotPattern className="py-20">
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 gradient-text">Our Solutions</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover our cutting-edge cloud solutions and upcoming innovations
					</p>
				</motion.div>

				<Tabs defaultValue="existing" className="max-w-6xl mx-auto">
					<TabsList className="grid w-full grid-cols-2 mb-8">
						<TabsTrigger value="existing">Live Solutions</TabsTrigger>
						<TabsTrigger value="upcoming">Coming Soon</TabsTrigger>
					</TabsList>

					<TabsContent value="existing">
						<div className="grid gap-8 md:grid-cols-2">
							{existingProjects.map((project: Project) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="h-full"
								>
									<ExistingProjectCard 
										{...project}
										images={[]}
										features={[]}
									/>
								</motion.div>
							))}
						</div>
					</TabsContent>

					<TabsContent value="upcoming">
						<div className="grid gap-8 md:grid-cols-2">
							{upcomingProjects.map((project: Project) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="h-full"
								>
									<UpcomingProjectCard 
										{...project}
										images={[]}
										onNotify={(email) => handleNotify(email, project.id)}
									/>
								</motion.div>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</DotPattern>
	);
}