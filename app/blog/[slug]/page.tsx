'use client';

import { useParams } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useBlogPost } from '@/hooks/react-query/use-blog';
import { BlogPostView } from '@/components/blog/blog-post-view';

export default function BlogPostPage(): JSX.Element {
	const { slug } = useParams();
	const postSlug = Array.isArray(slug) ? slug[0] : slug;
	const { data: post, isLoading, error } = useBlogPost(postSlug);

	if (isLoading) {
		return (
			<div className="container py-8">
				<div className="max-w-4xl mx-auto">
					<div className="py-8 flex justify-center">
						<LoadingSpinner size="lg" />
					</div>
				</div>
			</div>
		);
	}

	if (error || !post) {
		return (
			<div className="container py-8">
				<div className="max-w-4xl mx-auto text-center text-muted-foreground">
					{error ? 'Error loading blog post.' : 'Blog post not found.'}
				</div>
			</div>
		);
	}

	return (
		<div className="container py-8">
			<div className="max-w-4xl mx-auto">
				<BlogPostView post={post} />
			</div>
		</div>
	);
}
