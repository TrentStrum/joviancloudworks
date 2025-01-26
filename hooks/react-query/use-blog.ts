'use client';

import { useQuery, useMutation, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

import type { BlogPost, BlogPostFormData } from '@/types/blog.types';
import type {
	UseInfiniteQueryResult,
	UseQueryResult,
	UseMutationResult,
	InfiniteData,
	UseQueryOptions,
} from '@tanstack/react-query';

import { queryKeys } from '@/hooks/react-query/queryKeys';
import { apiClient } from '@/lib/apiClient';

interface UseBlogPostsParams {
	searchTerm?: string;
	sortBy?: string;
}

export function useSingleBlogPost(id: string): UseQueryResult<BlogPost, Error> {
	return useQuery({
		queryKey: ['blog', 'post', id],
		queryFn: async () => {
			const response = await apiClient.get<BlogPost>(`/api/blog/${id}`);
			return response;
		},
		enabled: !!id,
	});
}

export function useBlogPostsList({ searchTerm, sortBy }: UseBlogPostsParams = {}) {
	return useInfiniteQuery<BlogPost[]>({
		queryKey: ['blog-posts', searchTerm, sortBy],
		initialPageParam: 1,
		queryFn: async ({ pageParam }) => {
			const posts = await apiClient.get<BlogPost[]>('/api/blog', {
				params: { page: pageParam, searchTerm, sortBy },
			});
			return posts;
		},
		getNextPageParam: (lastPage, allPages) =>
			lastPage?.length === 10 ? allPages.length + 1 : undefined,
	});
}

export const useCreateBlogPost = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: BlogPostFormData) => {
			if (data.featured) {
				await apiClient.post('/api/blog/unfeature-all');
			}
			return apiClient.post('/api/blog', data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
		},
	});
};

export const useUpdateBlogPost = (id: string) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: BlogPostFormData) => {
			if (data.featured) {
				await apiClient.post('/api/blog/unfeature-all', { excludeId: id });
			}
			const response = await apiClient.put<BlogPost>(`/api/blog/${id}`, data);
			return response;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
		},
	});
};

export function useDeleteBlogPost(): UseMutationResult<void, Error, string> {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: string) => {
			try {
				await apiClient.delete(`/api/blog/${id}`);
			} catch (error) {
				// apiClient will automatically handle non-200 responses and throw appropriate errors
				throw new Error((error as Error).message || 'Failed to delete post');
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
		},
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
			const response = await apiClient.get<BlogPost>('/api/blog/featured');
			return response;
		},
	});
}
