'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from './outside-click';
import type { BlogPost } from '@/types/blog.types';
import { Card } from '@/components/ui/card';

interface AdminPostViewerProps {
	posts: Array<{
		id: string | number;
		description: string;
		title: React.ReactNode;
		titleText: string;
		src: string;
		ctaText: string;
		ctaLink: string;
		content: () => React.ReactNode;
	}>;
	onEdit: (post: BlogPost) => void;
	onDelete: (id: string) => Promise<void>;
}

export function AdminPostViewer({ posts, onEdit, onDelete }: AdminPostViewerProps): JSX.Element {
	const [active, setActive] = useState<(typeof posts)[number] | null>(null);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setActive(null);
			}
		}

		if (active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/20 h-full w-full z-10"
						/>
						<div className="fixed inset-0 grid place-items-center z-[100]">
							<motion.div
								layoutId={`card-${active.title}-${id}`}
								ref={ref}
								className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
							>
								<motion.div layoutId={`image-${active.title}-${id}`}>
									<Image
										priority
										width={200}
										height={200}
										src={active.src}
										alt={active.titleText}
										className="w-full h-80 object-cover object-center"
									/>
								</motion.div>
								<div className="p-6">
									<div className="flex justify-between items-start">
										<div>
											<motion.h3
												layoutId={`title-${active.title}-${id}`}
												className="text-xl font-semibold mb-2"
											>
												{active.title}
											</motion.h3>
											<motion.p className="text-muted-foreground">
												{active.description}
											</motion.p>
										</div>
										<motion.div layoutId={`button-${active.title}-${id}`}>
											{active.content()}
										</motion.div>
									</div>
								</div>
							</motion.div>
						</div>
					</>
				)}
			</AnimatePresence>

			<Card className="overflow-hidden border-0 bg-transparent">
				<ul className="divide-y divide-transparent">
					{posts.map((post) => (
						<motion.div
							layoutId={`card-${post.title}-${id}`}
							key={post.id}
							onClick={() => setActive(post)}
							className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-accent rounded-lg cursor-pointer"
						>
							<div className="flex gap-4 items-center">
								<motion.div layoutId={`image-${post.title}-${id}`}>
									<Image
										width={56}
										height={56}
										src={post.src}
										alt={post.titleText}
										className="rounded-lg object-cover"
									/>
								</motion.div>
								<div>
									<motion.h3
										layoutId={`title-${post.title}-${id}`}
										className="font-medium"
									>
										{post.title}
									</motion.h3>
									<p className="text-muted-foreground text-sm line-clamp-1">
										{post.description}
									</p>
								</div>
							</div>
							<motion.div layoutId={`button-${post.title}-${id}`}>
								{post.content()}
							</motion.div>
						</motion.div>
					))}
				</ul>
			</Card>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};
