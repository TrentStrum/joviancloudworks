'use client';

import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { BlogPost } from '@/types/blog.types';
import { BlogPostView } from '../blog/blog-post-view';

interface PreviewModalProps {
	isOpen: boolean;
	onClose: () => void;
	post: Partial<BlogPost>;
}

export function PreviewModal({ isOpen, onClose, post }: PreviewModalProps): JSX.Element {
	const previewPost: BlogPost = {
		id: 0,
		title: post.title || 'Preview Title',
		content: post.content || 'Preview Content',
		image_url: post.image_url || '/Jupiter.png',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		published_at: new Date().toISOString(),
		featured: post.featured || false,
		slug: 'preview',
		views: 0,
		profiles: {
			username: 'Preview User',
		},
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl overflow-hidden rounded-lg">
				<div className="relative h-full p-6">
					<button
						onClick={onClose}
						className="absolute right-6 top-6 z-50 rounded-full bg-white/80 p-2 shadow-md hover:bg-white/90 transition-colors dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
					>
						<X className="h-4 w-4" />
					</button>
					<div className="max-h-[80vh] overflow-y-auto">
						<BlogPostView 
							post={previewPost} 
							isPreview 
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
