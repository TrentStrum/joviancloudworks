'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AffiliateBannerProps {
	title: string;
	description: string;
	imageUrl: string;
	affiliateUrl: string;
	testGroup: 'A' | 'B';
	onClose: () => void;
	onInteraction: (type: 'click' | 'close') => void;
}

export function AffiliateBanner({
	title,
	description,
	imageUrl,
	affiliateUrl,
	testGroup,
	onClose,
	onInteraction,
}: AffiliateBannerProps) {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
		onClose();
		onInteraction('close');
	};

	const handleClick = () => {
		window.open(affiliateUrl, '_blank');
		onInteraction('click');
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					className="fixed bottom-4 right-4 z-50"
					data-test-group={testGroup}
				>
					<Card className="w-[300px] p-4">
						<Button
							size="icon"
							variant="ghost"
							className="absolute top-2 right-2"
							onClick={handleClose}
						>
							<X className="h-4 w-4" />
						</Button>
						<img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-3" />
						<h4 className="font-semibold mb-2">{title}</h4>
						<p className="text-sm text-muted-foreground mb-3">{description}</p>
						<Button className="w-full" onClick={handleClick}>
							Learn More
						</Button>
					</Card>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
