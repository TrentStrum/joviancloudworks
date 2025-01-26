'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour } from './skeletons';

import type { Project } from '@/types/portfolio.types';

export function FeaturedSolution(): JSX.Element {
	const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
	const supabase = createClientComponentClient();
	const { theme } = useTheme();
	const isDark = theme === 'dark';

	useEffect(() => {
		const loadFeaturedProjects = async () => {
			const { data } = await supabase
				.from('projects')
				.select('*')
				.eq('featured', true)
				.order('featured_location');

			setFeaturedProjects(data || []);
		};

		loadFeaturedProjects();
	}, []);

	const getSkeletonComponent = (location: string) => {
		switch (location) {
			case '1':
				return <SkeletonOne />;
			case '2':
				return <SkeletonTwo />;
			case '3':
				return <SkeletonThree />;
			case '4':
				return <SkeletonFour />;
			default:
				return null;
		}
	};

	return (
		<div className="relative z-20 py-20 max-w-7xl mx-auto">
			<div className="px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4 text-primary dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-orange-400">
						Featured Solutions
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Discover our most innovative cloud solutions that are transforming businesses
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
					{featuredProjects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className={`${getLocationClassName(
								project.featured_location as '1' | '2' | '3' | '4'
							)} bg-card hover:bg-card/90 transition-colors rounded-lg p-6 shadow-sm`}
						>
							<h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
							<p className="text-sm text-muted-foreground mb-4">{project.featured_description}</p>
							{isDark && (
								<div className="h-full w-full">
									{getSkeletonComponent(project.featured_location)}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

function getLocationClassName(location: '1' | '2' | '3' | '4'): string {
	const classNames = {
		'1': 'col-span-1 lg:col-span-4',
		'2': 'col-span-1 lg:col-span-2',
		'3': 'col-span-1 lg:col-span-3',
		'4': 'col-span-1 lg:col-span-3',
	} as const;
	return classNames[location];
}
