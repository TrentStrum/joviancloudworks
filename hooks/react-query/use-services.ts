'use client';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { services } from '@/lib/services';
import { Service } from '@/types/service.types';
import { InfiniteData } from '@tanstack/react-query';

const ITEMS_PER_PAGE = 3;

export function useGetServices() {
	return useInfiniteQuery<Service[], Error, InfiniteData<Service[]>>({
		queryKey: ['services'],
		initialPageParam: 1,
		queryFn: async ({ pageParam = 1 }) => {
			const start = (Number(pageParam) - 1) * ITEMS_PER_PAGE;
			return services.slice(start, start + ITEMS_PER_PAGE);
		},
		getNextPageParam: (_, pages) => {
			const nextPage = pages.length + 1;
			return nextPage * ITEMS_PER_PAGE <= services.length ? nextPage : undefined;
		},
	});
}

export function useGetService(id: string) {
	return useQuery<Service>({
		queryKey: ['services', id],
		queryFn: () => {
			const service = services.find((s) => s.id === id);
			if (!service) {
				throw new Error(`Service with id ${id} not found`);
			}
			return service;
		},
	});
}
