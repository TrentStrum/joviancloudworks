import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/lib/apiClient';

interface NotifyData {
	email: string;
	projectId: string;
}

export function useNotify() {
	return useMutation({
		mutationFn: (data: NotifyData) => 
			apiClient.post('/api/notify', data),
		onError: (error) => {
			console.error('Failed to subscribe:', error);
		},
	});
} 