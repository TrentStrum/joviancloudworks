'use client';

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
		image_url: post.image_url || '/Jupiter.png', // Changed from placeholder.jpg
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
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
				<BlogPostView post={previewPost} isPreview />
			</DialogContent>
		</Dialog>
	);
}
