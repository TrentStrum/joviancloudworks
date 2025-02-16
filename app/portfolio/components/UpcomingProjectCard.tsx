'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Bell, Users, Info} from 'lucide-react';
import { ImageCarousel } from '@/components/features/image-carousel';
import { ProjectModal } from './project-modal';
import Link from 'next/link';

interface UpcomingProjectProps {
	id: string;
	title: string;
	description: string;
	images: { url: string; alt: string }[];
	launchDate?: string;
	progress?: number;
	waitlistCount?: number;

	discount?: number;
	onNotify: (email: string) => void;
}

export function UpcomingProjectCard({
	id,
	title,
	description,
	images,
	launchDate = 'Coming Soon',
	progress = 0,
	waitlistCount = 0,

	discount = 0,
	onNotify,
}: UpcomingProjectProps) {
	const [email, setEmail] = useState('');
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleNotify = (e: React.MouseEvent) => {
		e.stopPropagation();
		onNotify(email);
		setIsSubscribed(true);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();
		setEmail(e.target.value);
	};

	return (
		<>
			<Card className="overflow-hidden h-full flex flex-col">
				<div className="aspect-video">
					<Link href={`/project/${id}`}>	
						<ImageCarousel images={images} />	
					</Link>
				</div>


				<div className="p-6 flex flex-col flex-grow">
					<div className="flex justify-between items-start mb-4">
						<div>
							<Link href={`/project/${id}`}>
								<h3 className="text-xl font-semibold">{title}</h3>
							</Link>
							<p className="text-muted-foreground">{description}</p>
						</div>
						<Badge variant="secondary" className="text-sm">

							{discount}% OFF
						</Badge>
					</div>

					<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
						<Users className="h-4 w-4" />
						<span>{waitlistCount} users waitlisted</span>
					</div>

					<div className="space-y-2 mb-4">
						<div className="flex justify-between text-sm">
							<span>Development Progress</span>
							<span>{progress}%</span>
						</div>
						<Progress value={progress} />
					</div>

					<p className="text-sm text-muted-foreground mb-4">
						Expected Launch: {new Date(launchDate).toLocaleDateString()}
					</p>

					<div className="mt-auto space-y-4">
						{isSubscribed ? (
							<Button variant="outline" disabled className="w-full">
								<Bell className="mr-2 h-4 w-4" />
								You&apos;re on the list!
							</Button>
						) : (
							<div className="flex gap-2">
								<Input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={handleEmailChange}
									onClick={(e) => e.stopPropagation()}
								/>
								<Button onClick={handleNotify}>
									<Bell className="mr-2 h-4 w-4" />
									Notify Me
								</Button>
							</div>
						)}

						<Button variant="outline" className="w-full" onClick={() => setShowModal(true)}>
							<Info className="mr-2 h-4 w-4" />
							Learn More
						</Button>
					</div>
				</div>
			</Card>

			<ProjectModal
				open={showModal}
				onOpenChange={setShowModal}
				project={{
					title,
					description,
					launchDate,
					progress,
					waitlistCount,
					discount,
				}}
			/>
		</>
	);
}
