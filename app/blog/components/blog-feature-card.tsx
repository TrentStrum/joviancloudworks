'use client';

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { type BlogPost } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogFeatureCardProps {
	post: BlogPost;
}

export function BlogFeatureCard({ post }: BlogFeatureCardProps): JSX.Element {
	return (
		<BackgroundGradient className="rounded-[22px] p-1 bg-background">
			<Link href={`/blog/${post.id}`}>
				<motion.div 
					whileHover={{ scale: 1.02 }}
					className="bg-background p-6 rounded-[20px] space-y-6"
				>
					<div className="relative w-full h-[400px] rounded-lg overflow-hidden">
						<Image
							src={post.image_url || post.coverImage || '/Jupiter.png'}
							alt={post.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="space-y-4">
						<h3 className="text-2xl font-bold">{post.title}</h3>
						<p className="text-muted-foreground line-clamp-3">
							{post.shortDescription || post.excerpt}
						</p>
					</div>
				</motion.div>
			</Link>
		</BackgroundGradient>
	);
}
