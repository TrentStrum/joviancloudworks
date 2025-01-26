'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { ImageCarousel } from '@/components/features/image-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingTier {
	name: string;
	price: string;
	features: string[];
}

interface ExistingProjectProps {
	id: string;
	title: string;
	description: string;
	images?: string[];
	features?: string[];
	technologies: string[];
	pricing?: PricingTier[];
	demoUrl?: string;
}

export function ExistingProjectCard(props: ExistingProjectProps): JSX.Element {
	return (
		<Card className="overflow-hidden h-full flex flex-col">
			<div className="aspect-video">
				<ImageCarousel images={props.images?.map((url) => ({ url, alt: props.title })) || []} />
			</div>

			<div className="p-6 flex flex-col flex-grow">
				<div className="mb-6">
					<h3 className="text-xl font-semibold mb-2">{props.title}</h3>
					<p className="text-muted-foreground">{props.description}</p>
				</div>

				<div className="flex flex-wrap gap-2 mb-6">
					{props.technologies?.map((tech) => (
						<Badge key={tech} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>

				<div className="space-y-2 mb-6">
					{props.features?.map((feature) => (
						<div key={feature} className="flex items-center gap-2">
							<Check className="h-4 w-4 text-green-500 flex-shrink-0" />
							<span className="text-sm">{feature}</span>
						</div>
					))}
				</div>

				<div className="mt-auto space-y-4">
					{props.pricing?.map((tier) => (
						<div key={tier.name} className="p-4 rounded-lg border">
							<div className="flex justify-between items-center mb-2">
								<h4 className="font-semibold">{tier.name}</h4>
								<span className="text-lg font-bold">{tier.price}</span>
							</div>
							<ul className="space-y-2 mb-4">
								{tier.features.map((feature) => (
									<li
										key={feature}
										className="text-sm text-muted-foreground flex items-center gap-2"
									>
										<Check className="h-3 w-3 flex-shrink-0" />
										{feature}
									</li>
								))}
							</ul>
							<Button className="w-full" asChild>
								<a href={props.demoUrl || '#'} target="_blank" rel="noopener noreferrer">
									Subscribe Now
								</a>
							</Button>
						</div>
					))}
				</div>
			</div>
		</Card>
	);
}
