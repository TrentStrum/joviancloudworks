'use client';

import Image from 'next/image';

export function SkeletonOne(): JSX.Element {
	return (
		<div className="relative flex py-8 px-2 gap-10 h-full">
			<div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
				<div className="flex flex-1 w-full h-[300px] md:h-[400px] flex-col">
					<Image
						src="/Jupiter.png"
						alt="Jupiter planet in space with orange and purple hues"
						width={800}
						height={800}
						className="w-full h-full object-cover rounded-sm"
						priority
					/>
				</div>
			</div>

			<div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
			<div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
		</div>
	);
} 