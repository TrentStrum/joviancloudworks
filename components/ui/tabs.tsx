'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Tab = {
	title: string;
	value: string;
	content?: string | React.ReactNode | JSX.Element;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);
	const [hovering, setHovering] = useState(false);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	return (
		<div className="w-full">
			{/* Tab Navigation */}
			<div
				className={cn(
					'flex flex-row items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm w-fit mb-8',
					containerClassName,
				)}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				{propTabs.map((tab, idx) => (
					<button
						key={tab.title}
						onClick={() => moveSelectedTabToTop(idx)}
						className={cn(
							'relative px-4 py-2 rounded-full text-sm transition-all duration-500',
							'hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105',
							tab.value === active.value ? 'text-white' : 'text-white/60 hover:text-white/90',
							tabClassName,
						)}
					>
						{active.value === tab.value && (
							<motion.div
								layoutId="activeTab"
								className={cn(
									'absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm',
									'border border-white/10 shadow-[0_0_25px_rgba(255,165,0,0.15)]',
									'rounded-full',
									activeTabClassName,
								)}
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 0.6,
									stiffness: 150,
									damping: 20,
								}}
							/>
						)}
						<span className="relative z-10">{tab.title}</span>
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className="relative h-[20rem] md:h-[40rem] [perspective:1000px]">
				<div className="absolute inset-0 flex items-end justify-center">
					{tabs.map((tab, idx) => (
						<motion.div
							key={tab.value}
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								transformStyle: 'preserve-3d',
							}}
							initial={{
								opacity: idx === 0 ? 0 : 0.5,
								y: idx === 0 ? 20 : 0,
								rotateX: idx * 5,
								scale: 1 - idx * 0.05,
							}}
							animate={{
								opacity:
									idx === 0
										? 1
										: hovering
											? Math.max(0.8 - idx * 0.1, 0)
											: Math.max(0.5 - idx * 0.2, 0),
								rotateX: hovering ? idx * 5 : 0,
								y: hovering ? -(idx * 50) : 0,
								scale: hovering ? Math.max(0.95 - idx * 0.05, 0.7) : 1 - idx * 0.05,
								zIndex: -idx,
							}}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 30,
								duration: 0.5,
							}}
							className={cn('w-full h-full origin-bottom', contentClassName)}
						>
							<div className="w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a0f1f] via-[#2c1635] to-[#1f2937]">
								{tab.content}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
	hovering = false,
}: {
	className?: string;
	tabs: Tab[];
	hovering?: boolean;
}) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};

	return (
		<div className="relative w-full">
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -50 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 20, 0] : 0,
					}}
					transition={{ duration: 0.3 }}
					className={cn('w-full absolute top-0 left-0', className)}
				>
					{tab.content}
				</motion.div>
			))}
		</div>
	);
};
