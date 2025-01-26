'use client';

import { Star, Eye } from 'lucide-react';
import { useState } from 'react';

import { DeleteConfirmationModal } from './delete-confirmation-modal';
import { PreviewModal } from './preview-modal';

import type { BlogPost, BlogPostFormData } from '@/types/blog.types';

import { BlogPostForm } from '@/app/blog/components/BlogPostForm';
import { AdminPostViewer } from '@/components/admin/admin-post-viewer';
import { BlogContent } from '@/components/ui/blog-content';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/helpers/use-toast';
import {
	useBlogPostsList,
	useCreateBlogPost,
	useUpdateBlogPost,
	useDeleteBlogPost,
} from '@/hooks/react-query/use-blog';

export function PostEditor(): JSX.Element {
	const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
	const { toast } = useToast();
	const { data, isLoading } = useBlogPostsList({ sortBy: 'created_at' });

	const createPostMutation = useCreateBlogPost();
	const updatePostMutation = useUpdateBlogPost(editingPost?.id?.toString() ?? '');
	const deletePostMutation = useDeleteBlogPost();

	const [showPreview, setShowPreview] = useState(false);
	const [formData, setFormData] = useState<Partial<BlogPost>>({});
	const [deleteId, setDeleteId] = useState<string | null>(null);

	const handleSubmit = async (data: BlogPostFormData): Promise<void> => {
		try {
			if (editingPost?.id) {
				await updatePostMutation.mutateAsync(data);
			} else {
				await createPostMutation.mutateAsync(data);
			}

			toast({
				variant: 'success',
				title: 'Success',
				description: `Post ${editingPost ? 'updated' : 'created'} successfully`,
			});

			setEditingPost(null);
		} catch (error) {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: error instanceof Error ? error.message : 'Failed to save post',
			});
		}
	};

	const handleDelete = async (id: string): Promise<void> => {
		setDeleteId(id);
	};

	const handleConfirmDelete = async (): Promise<void> => {
		if (!deleteId) return;

		try {
			await deletePostMutation.mutateAsync(deleteId);
			toast({
				title: 'Success',
				description: 'Post deleted successfully',
				variant: 'success',
			});
		} catch (error) {
			console.error('Delete error:', error);
			toast({
				title: 'Error',
				description: error instanceof Error ? error.message : 'Failed to delete post',
				variant: 'destructive',
			});
		}
	};

	const handleFormChange = (e: React.FormEvent<HTMLFormElement>): void => {
		const form = e.currentTarget;
		const formData = new FormData(form);
		setFormData({
			title: formData.get('title') as string,
			content: formData.get('content') as string,
			image_url: (formData.get('image_url') as string) || '/Jupiter.png',
			featured: formData.get('featured') === 'on',
		});
	};

	const handleEdit = (post: BlogPost): void => {
		setEditingPost(post);
		setFormData({
			title: post.title,
			content: post.content,
			shortDescription: post.shortDescription || '',
			category: post.category || '',
			excerpt: post.excerpt || '',
			featured: post.featured || false,
			tags: post.tags || [],
			image_url: post.image_url || '/Jupiter.png',
		});
	};

	if (isLoading) return <div>Loading...</div>;

	const blogPosts = data?.pages.flat() ?? [];
	const formattedPosts = blogPosts.map((post: BlogPost) => ({
		id: post.id,
		description: post.shortDescription || post.excerpt || post.content.slice(0, 150) + '...',
		titleText: post.title,
		title: (
			<div className="flex items-center gap-2">
				{post.featured && <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />}
				<span>{post.title}</span>
			</div>
		),
		src: post.image_url || '/Jupiter.png',
		ctaText: 'View Details',
		ctaLink: '#',
		content: (setActiveId: (id: string | number | null) => void) => (
			<div className="flex gap-2">
				<Button
					variant="outline"
					size="sm"
					onClick={(e) => {
						e.stopPropagation();
						handleEdit(post);
						setActiveId(null);
					}}
				>
					Edit
				</Button>
				<Button
					variant="destructive"
					size="sm"
					onClick={(e) => {
						e.stopPropagation();
						if (post.id) {
							handleDelete(post.id.toString());
						}
						setActiveId(null);
					}}
				>
					Delete
				</Button>
			</div>
		),
	}));

	return (
		<div className="space-y-8">
			<Card className="p-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
					<Button
						variant="outline"
						size="sm"
						onClick={() => setShowPreview(true)}
						disabled={!formData.title && !formData.content}
					>
						<Eye className="h-4 w-4 mr-2" />
						Preview
					</Button>
				</div>

				<BlogPostForm
					post={editingPost}
					onSubmit={handleSubmit}
					onChange={handleFormChange}
					setEditingPost={setEditingPost}
					key={editingPost?.id}
				/>
			</Card>

			<PreviewModal isOpen={showPreview} onClose={() => setShowPreview(false)} post={formData} />

			<div className="space-y-4">
				<h2 className="text-xl font-semibold">Existing Posts</h2>
				<AdminPostViewer posts={formattedPosts} onEdit={setEditingPost} onDelete={handleDelete} />
			</div>

			<DeleteConfirmationModal
				isOpen={!!deleteId}
				onClose={() => setDeleteId(null)}
				onConfirm={handleConfirmDelete}
			/>
		</div>
	);
}
