import { Container } from '@/components/ui/container';
import { Skeleton } from '@/components/ui/skeleton';

export function ServicesSkeleton() {
	return (
		<div className="relative mt-28 mb-24">
			<div className="grid grid-cols-1 gap-20">
				{[1, 2, 3].map((index) => (
					<div key={index} className="flex items-center relative z-10">
						<Container>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
								<div className={`space-y-4 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
									<Skeleton className="w-14 h-14 rounded-2xl" />
									<Skeleton className="h-10 w-3/4" />
									<Skeleton className="h-6 w-full" />
								</div>

								<div className={`space-y-4 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
									{[1, 2, 3].map((featureIndex) => (
										<div key={featureIndex} className="space-card rounded-xl p-5">
											<Skeleton className="h-6 w-1/2 mb-2" />
											<Skeleton className="h-4 w-full mb-3" />
											<div className="space-y-2">
												{[1, 2, 3].map((capIndex) => (
													<div key={capIndex} className="flex items-center gap-2">
														<Skeleton className="w-4 h-4 rounded-full" />
														<Skeleton className="h-4 w-3/4" />
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</Container>
					</div>
				))}
			</div>
		</div>
	);
}
