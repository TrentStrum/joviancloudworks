'use client';

import { useQuery, useMutation, useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@/hooks/react-query/queryKeys';
import { apiClient } from '@/lib/apiClient';

import type { BlogPost, BlogPostFormData } from '@/types/blog.types';
import type {
	UseInfiniteQueryResult,
	UseQueryResult,
	UseMutationResult,
	UseMutationOptions,
	InfiniteData,
	UseQueryOptions,
} from '@tanstack/react-query';

interface UseBlogPostsParams {
	searchTerm?: string;
	sortBy?: string;
}

export function useBlogPosts({
	searchTerm,
	sortBy,
}: UseBlogPostsParams = {}): UseInfiniteQueryResult<InfiniteData<BlogPost[]>, Error> {
	return useInfiniteQuery<BlogPost[]>({
		queryKey: ['blog-posts', searchTerm, sortBy],
		initialPageParam: 1,
		queryFn: async ({ pageParam }) => {
			try {
				const posts = await apiClient.get<BlogPost[]>('/api/blog', {
					params: {
						page: pageParam,
						searchTerm,
						sortBy,
					},
				});
				return posts;
			} catch (error) {
				console.error('API Error:', error);
				throw error;
			}
		},
		getNextPageParam: (lastPage: BlogPost[], pages: BlogPost[][]) => {
			return lastPage?.length === 10 ? pages.length + 1 : undefined;
		},
	});
}

export function useBlogPost(slug: string): UseQueryResult<BlogPost, Error> {
	return useQuery({
		queryKey: ['blog', 'post', slug],
		queryFn: async () => {
			const response = await apiClient.get<BlogPost>(`/blog/${slug}`);
			return response;
		},
		enabled: !!slug,
	});
}

export const useCreateBlogPost = () => {
	return useMutation({
		mutationFn: async (data: BlogPostFormData) => {
			if (data.featured) {
				await apiClient.post('/api/posts/unfeature-all');
			}
			return apiClient.post('/api/posts', data);
		},
	});
};

export const useUpdateBlogPost = (id: string) => {
	return useMutation({
		mutationFn: async (data: BlogPostFormData) => {
			if (data.featured) {
				await apiClient.post('/api/posts/unfeature-all', { excludeId: id });
			}
			return apiClient.put(`/api/posts/${id}`, data);
		},
	});
};

export function useDeleteBlogPost(
	options?: UseMutationOptions<void, Error, string>
): UseMutationResult<void, Error, string> {
	return useMutation({
			mutationFn: async (id: string): Promise<void> => {
				await apiClient.delete(`/api/posts/${id}`);
			},
			...options,
		});
}

export function useBlogPostWithViews(slug: string): UseQueryResult<BlogPost, Error> {
	return useQuery({
		queryKey: ['blog', 'post', slug],
		queryFn: async () => {
			const response = await apiClient.get<BlogPost>(`/blog/${slug}`);

			// Increment view count if post exists
			if (response?.id) {
				await apiClient.post('/blog/views', {
					post_id: response.id,
				});
			}

			return response;
		},
		enabled: !!slug,
	});
}

export const useBlogComments = (blogId: string, options?: UseQueryOptions<Comment[]>) => {
	return useQuery<Comment[]>({
		queryKey: queryKeys.blog.comments(blogId),
		queryFn: () => apiClient.get<Comment[]>(`/api/blog-page/${blogId}/comments`),
		...options,
	});
};

export function useFeaturedPost(): UseQueryResult<BlogPost, Error> {
	return useQuery({
		queryKey: ['blog', 'featured'],
		queryFn: async () => {
			const response = await apiClient.get<BlogPost>('/api/posts/featured');
			return response;
		},
	});
}