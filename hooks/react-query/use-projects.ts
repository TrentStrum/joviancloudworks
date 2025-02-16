'use client';

import { useQuery } from '@tanstack/react-query';
import type { Project } from '@/types/project.types';
import { apiClient } from '@/lib/apiClient';

// Client-side hook for React Query
export function useProjects() {
	return useQuery<Project[]>({
		queryKey: ['projects'],
		queryFn: async () => {
			const response = await apiClient.get<Project[]>('/projects');
			return response.data;
		},
	});
}

// Client-side hook for single project
export function useProject(id: string) {
	return useQuery<Project>({
		queryKey: ['project', id],
		queryFn: async () => {
			const response = await apiClient.get<Project>(`/projects/${id}`);
			return response.data;
		},
	});
}