import { useQuery } from '@tanstack/react-query';

import type { Project } from '@/types/portfolio.types';

import { apiClient } from '@/lib/apiClient';

export function useProjects() {
	return useQuery<Project[]>({
		queryKey: ['projects'],
		queryFn: () => apiClient.get<Project[]>('/api/projects'),
	});
}
