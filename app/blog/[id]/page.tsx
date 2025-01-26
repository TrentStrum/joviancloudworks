// 'use client';

// import { useParams } from 'next/navigation';
// import { LoadingSpinner } from '@/components/ui/loading-spinner';
// import { useSingleBlogPost } from '@/hooks/react-query/use-blog';
// import { BlogPostView } from '@/components/blog/blog-post-view';

// export default function BlogPostPage(): JSX.Element {
// 	const { id } = useParams();
// 	const { data: post, isLoading, error } = useSingleBlogPost(id as string);

// 	if (isLoading) {
// 		return (
// 			<div className="container py-8">
// 				<div className="max-w-4xl mx-auto">
// 					<div className="py-8 flex justify-center">
// 						<LoadingSpinner size="lg" />
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	if (error || !post) {
// 		return (
// 			<div className="container py-8">
// 				<div className="max-w-4xl mx-auto text-center text-muted-foreground">
// 					{error ? 'Error loading blog post.' : 'Blog post not found.'}
// 				</div>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className="container py-8">
// 			<div className="max-w-4xl mx-auto">
// 				<BlogPostView post={post} />
// 			</div>
// 		</div>
// 	);
// }
import { redirect } from 'next/navigation';
export default function Page(): JSX.Element {
	redirect('/');
}