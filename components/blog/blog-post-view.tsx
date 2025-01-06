'use client';

import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/types/blog.types';

interface BlogPostViewProps {
	post: BlogPost;
	isPreview?: boolean;
}

export function BlogPostView({ post, isPreview }: BlogPostViewProps): JSX.Element {
	return (
		<Card className="border-0 rounded-none">
			{post.image_url && (
				<div className="relative w-full aspect-video">
					<Image src={post.image_url} alt={post.title} fill className="object-cover" priority />
				</div>
			)}
			<CardHeader>
				<CardTitle className="text-3xl">{post.title}</CardTitle>
				{!isPreview && (
					<div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
						<span>By {post.profiles?.full_name || post.profiles?.username || 'Anonymous'}</span>
						<span>•</span>
						<time dateTime={post.published_at || ''}>
							{post.published_at &&
								formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
						</time>
					</div>
				)}
			</CardHeader>
			<CardContent>
				<div className="prose prose-neutral dark:prose-invert max-w-none">{post.content}</div>
			</CardContent>
		</Card>
	);
}
