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
		content: (setActiveId: (id: string | number | null) => void) => React.ReactNode;
	}>;
	onEdit: (post: BlogPost) => void;
	onDelete: (id: string) => Promise<void>;
}

export function AdminPostViewer({ posts }: AdminPostViewerProps): JSX.Element {
	const [activeId, setActiveId] = useState<string | number | null>(null);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();

	const active = posts.find(post => post.id === activeId);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setActiveId(null);
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

	useOutsideClick(ref, () => setActiveId(null));

	const renderPostContent = (post: AdminPostViewerProps['posts'][0], isModal = false) => (
		<>
			<div className={`flex ${isModal ? 'flex-col' : 'gap-4 items-center'}`}>
				<div className="relative">
					<Image
						width={isModal ? 600 : 56}
						height={isModal ? 400 : 56}
						src={post.src}
						alt={post.titleText}
						className={isModal ? 'w-full h-[300px] object-cover rounded-t-xl' : 'rounded-lg object-cover'}
						priority={isModal}
					/>
				</div>
				{isModal ? (
					<>
						<div className="px-6">
							<div className="mt-6">
								<motion.h3
									layoutId={`title-${post.id}-${id}`}
										className="text-2xl font-semibold mb-3"
								>
									{post.title}
								</motion.h3>
								<p className="text-muted-foreground text-base">
									{post.description}
								</p>
							</div>
						</div>
						<div className="mt-6 px-6 pb-6">
							{post.content(setActiveId)}
						</div>
					</>
				) : (
					<div>
						<h3 className="font-medium">{post.title}</h3>
						<p className="text-sm text-muted-foreground line-clamp-1">
							{post.description}
						</p>
					</div>
				)}
			</div>
		</>
	);

	return (
		<>
			<AnimatePresence mode="wait">
				{active && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-10"
						/>
						<div className="fixed inset-0 grid place-items-center z-[100] p-4">
							<motion.div
								layoutId={`card-${active.id}-${id}`}
								ref={ref}
								className="w-full max-w-[600px] h-fit max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl"
							>
								<div className="relative">
									<button
										onClick={() => setActiveId(null)}
										className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
									>
										<CloseIcon />
									</button>
									<div className="overflow-y-auto">
										{renderPostContent(active, true)}
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
							layoutId={`card-${post.id}-${id}`}
							key={post.id}
							className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-accent rounded-lg"
						>
							<div onClick={() => setActiveId(post.id)} className="cursor-pointer flex-1">
								{renderPostContent(post)}
							</div>
							<div className="flex gap-2 mt-2 md:mt-0">
								{post.content(setActiveId)}
							</div>
						</motion.div>
					))}
				</ul>
			</Card>
		</>
	);
}

export const CloseIcon = (): JSX.Element => {
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
			className="h-5 w-5 text-neutral-600 dark:text-neutral-400"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};
