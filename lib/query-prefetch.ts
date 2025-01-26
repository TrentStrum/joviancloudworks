import { queryClient } from '@/providers/query-provider';

export const cachePrefetch = {
	user: async (userId: string) => {
		await queryClient.prefetchQuery({
			queryKey: ['user', userId],
			queryFn: () => fetch(`/api/users/${userId}`).then((res) => res.json()),
		});
	},
	projects: async (userId: string) => {
		await queryClient.prefetchQuery({
			queryKey: ['projects', userId],
			queryFn: () => fetch(`/api/projects?userId=${userId}`).then((res) => res.json()),
		});
	},
	subscriptions: async (userId: string) => {
		await queryClient.prefetchQuery({
			queryKey: ['subscriptions', userId],
			queryFn: () => fetch(`/api/subscriptions?userId=${userId}`).then((res) => res.json()),
		});
	},
};
