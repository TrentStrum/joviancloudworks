'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { apiClient } from '@/lib/apiClient';

export function useSignOut() {
	const router = useRouter();

	return useMutation({
		mutationFn: async () => {
			await apiClient.post('/api/auth/signout');
		},
		onSuccess: () => {
			router.push('/admin/login');
		},
		onError: (error) => {
			console.error('Sign out failed:', error);
		},
	});
}
