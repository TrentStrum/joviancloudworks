'use client';

import { useQuery } from '@tanstack/react-query';
import { services } from '@/lib/services';
import { Service, ServiceId } from '@/types/service.types';

export function useServices() {
	return useQuery<Service[]>({
		queryKey: ['services'],
		queryFn: () => services as Service[],
		staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
	});
}

export function useService(id: ServiceId) {
	return useQuery<Service>({
		queryKey: ['services', id],
		queryFn: () => {
			const service = services.find((s) => s.id === id);
			if (!service) {
				throw new Error(`Service with id ${id} not found`);
			}
			return service as Service;
		},
		staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
	});
}
