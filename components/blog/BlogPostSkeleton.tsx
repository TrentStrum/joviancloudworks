'use client';

import { Card, CardHeader, CardContent } from '@/src/components/ui/card';
import { Skeleton } from '@/src/components/ui/skeleton';

export function BlogPostSkeleton() {
	return (
		<>
			{/* Featured Post Skeleton */}
			<section className="mb-12">
				<div className="animate-pulse">
					<div className="bg-muted rounded-lg overflow-hidden">
						<div className="grid md:grid-cols-2 gap-6 p-6">
							<div className="aspect-video bg-muted-foreground/10 rounded-lg" />
							<div className="space-y-4">
								<div className="h-8 bg-muted-foreground/10 rounded w-3/4" />
								<div className="h-4 bg-muted-foreground/10 rounded w-full" />
								<div className="h-4 bg-muted-foreground/10 rounded w-5/6" />
								<div className="h-4 bg-muted-foreground/10 rounded w-4/6" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Category Rows Skeleton */}
			{[1, 2].map((category) => (
				<section key={category} className="space-y-4">
					<div className="flex justify-between items-center">
						<div className="h-8 bg-muted-foreground/10 rounded w-32" />
						<div className="flex gap-2">
							<div className="w-10 h-10 bg-muted-foreground/10 rounded" />
							<div className="w-10 h-10 bg-muted-foreground/10 rounded" />
						</div>
					</div>
					<div className="flex gap-6 overflow-hidden">
						{[1, 2, 3].map((post) => (
							<div key={post} className="min-w-[300px] md:min-w-[350px]">
								<div className="bg-muted rounded-lg p-4 space-y-4">
									<div className="aspect-[16/9] bg-muted-foreground/10 rounded" />
									<div className="h-6 bg-muted-foreground/10 rounded w-3/4" />
									<div className="h-4 bg-muted-foreground/10 rounded w-full" />
									<div className="h-4 bg-muted-foreground/10 rounded w-2/3" />
								</div>
							</div>
						))}
					</div>
				</section>
			))}
		</>
	);
}
