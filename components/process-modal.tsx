'use client';

import { motion } from 'framer-motion';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from '@/components/ui/animated-modal';
import { Button } from '@/components/ui/button';
import { LucideIcon, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProcessModalProps {
	title: string;
	description: string;
	icon: LucideIcon;
	details: {
		title: string;
		description: string;
		icon: LucideIcon;
		link?: {
			text: string;
			href: string;
		};
	}[];
	index: number;
	totalSteps: number;
}

export function ProcessModal({
	title,
	description,
	icon: Icon,
	details,
	index,
	totalSteps,
}: ProcessModalProps) {
	return (
		<div className="relative w-full">
			<Modal>
				<ModalTrigger className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="space-card px-5 py-8 rounded-xl flex flex-col h-[360px] w-full cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 bg-black/40"
					>
						<div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-primary/10 mx-auto">
							<Icon className="w-8 h-8 text-primary" />
						</div>
						<div className="text-center flex flex-col flex-grow">
							<h3 className="text-xl font-bold mb-3 whitespace-normal hyphens-auto">{title}</h3>
							<p className="text-muted-foreground text-base leading-relaxed mt-2">{description}</p>
						</div>
					</motion.div>
				</ModalTrigger>
				<ModalBody>
					<ModalContent>
						<div className="text-center mb-8">
							<div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-primary/10 mx-auto">
								<Icon className="w-8 h-8 text-primary" />
							</div>
							<h3 className="text-2xl font-bold mb-2">{title}</h3>
							<p className="text-muted-foreground">{description}</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{details.map((detail, index) => (
								<motion.div
									key={detail.title}
									initial={{ scale: 0.98, y: 5 }}
									animate={{ scale: 1, y: 0 }}
									transition={{
										duration: 0.2,
										delay: index * 0.03,
										ease: 'easeOut',
									}}
									className="space-card p-4 rounded-lg"
								>
									<div className="flex items-center gap-3 mb-3">
										<div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
											<detail.icon className="w-5 h-5 text-primary" />
										</div>
										<h4 className="font-semibold">{detail.title}</h4>
									</div>
									<p className="text-sm text-muted-foreground mb-2">{detail.description}</p>
									{detail.link && (
										<Link
											href={detail.link.href}
											className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-2"
										>
											{detail.link.text}
											<ExternalLink className="w-4 h-4" />
										</Link>
									)}
								</motion.div>
							))}
						</div>
					</ModalContent>
					<ModalFooter className="gap-4">
						{title === 'Initial Consultation' && (
							<>
								<Button variant="outline" onClick={() => (window.location.href = '/contact')}>
									Schedule Consultation
								</Button>
								<Button onClick={() => (window.location.href = '/calculator')}>
									Estimate Cost
								</Button>
							</>
						)}
						{title === 'Infrastructure Setup' && (
							<>
								<Button
									variant="outline"
									onClick={() => (window.location.href = '/infrastructure')}
								>
									View Infrastructure
								</Button>
								<Button onClick={() => (window.location.href = '/contact')}>Start Setup</Button>
							</>
						)}
						{title === 'Security Implementation' && (
							<>
								<Button
									variant="outline"
									onClick={() => (window.location.href = '/cosmic-shields')}
								>
									Security Features
								</Button>
								<Button onClick={() => (window.location.href = '/contact')}>
									Get Security Audit
								</Button>
							</>
						)}
						{title === 'Continuous Support' && (
							<>
								<Button
									variant="outline"
									onClick={() => (window.location.href = '/services#support')}
								>
									Support Plans
								</Button>
								<Button onClick={() => (window.location.href = '/contact')}>Get Support</Button>
							</>
						)}
					</ModalFooter>
				</ModalBody>
			</Modal>
			{index < totalSteps - 1 && (
				<div className="hidden lg:block absolute top-1/2 right-[-8px] transform translate-x-1/2 -translate-y-1/2 z-10">
					<ChevronRight className="w-6 h-6 text-primary" />
				</div>
			)}
		</div>
	);
}
