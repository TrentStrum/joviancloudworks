'use client';

import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useState } from 'react';

import { FeatureCard } from './feature-card';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface FeatureModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	features: Feature[];
	onNotify?: (email: string) => void;
}

interface Feature {
	title: string;
	description: string;
	images: { url: string; alt: string }[];
	metrics?: { label: string; value: string }[];
	ctaLabel?: string;
	ctaUrl?: string;
}

export function FeatureModal({ open, onOpenChange, features, onNotify }: FeatureModalProps) {
	const [email, setEmail] = useState('');
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleNotify = () => {
		if (onNotify) {
			onNotify(email);
			setIsSubscribed(true);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<FeatureCard {...feature} />
						</motion.div>
					))}
				</div>

				<div className="sticky bottom-0 bg-background/80 backdrop-blur-sm p-4 mt-6 -mx-6 -mb-6 border-t">
					{isSubscribed ? (
						<Button variant="outline" disabled className="w-full">
							<Bell className="mr-2 h-4 w-4" />
							You'll be notified of updates!
						</Button>
					) : (
						<div className="flex gap-2">
							<Input
								type="email"
								placeholder="Enter your email for project updates"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Button onClick={handleNotify}>
								<Bell className="mr-2 h-4 w-4" />
								Get Updates
							</Button>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
