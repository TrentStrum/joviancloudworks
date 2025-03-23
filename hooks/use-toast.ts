'use client';

// Inspired by react-hot-toast library
import * as React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import type { ToastActionElement, ToastProps } from '@/components/ui/toast';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
	id: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
	action?: ToastActionElement;
};

let count = 0;

function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}

// Query key for toasts
const TOASTS_QUERY_KEY = ['toasts'] as const;

// Toast store using React Query
function useToastStore() {
	const queryClient = useQueryClient();
	const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

	const addToastMutation = useMutation<ToasterToast[], Error, ToasterToast>({
		mutationFn: async (toast: ToasterToast) => {
			const newToasts = [toast, ...toasts].slice(0, TOAST_LIMIT);
			setToasts(newToasts);
			return newToasts;
		},
		onSuccess: (newToasts) => {
			queryClient.setQueryData(TOASTS_QUERY_KEY, newToasts);
		},
	});

	const updateToastMutation = useMutation<ToasterToast[], Error, Partial<ToasterToast>>({
		mutationFn: async (toast: Partial<ToasterToast>) => {
			const newToasts = toasts.map((t: ToasterToast) =>
				t.id === toast.id ? { ...t, ...toast } : t,
			);
			setToasts(newToasts);
			return newToasts;
		},
		onSuccess: (newToasts) => {
			queryClient.setQueryData(TOASTS_QUERY_KEY, newToasts);
		},
	});

	const dismissToastMutation = useMutation<ToasterToast[], Error, string | undefined>({
		mutationFn: async (toastId?: string) => {
			const newToasts = toastId
				? toasts.map((t: ToasterToast) => (t.id === toastId ? { ...t, open: false } : t))
				: toasts.map((t: ToasterToast) => ({ ...t, open: false }));
			setToasts(newToasts);
			return newToasts;
		},
		onSuccess: (newToasts) => {
			queryClient.setQueryData(TOASTS_QUERY_KEY, newToasts);
		},
	});

	const removeToastMutation = useMutation<ToasterToast[], Error, string | undefined>({
		mutationFn: async (toastId?: string) => {
			const newToasts =
				toastId === undefined ? [] : toasts.filter((t: ToasterToast) => t.id !== toastId);
			setToasts(newToasts);
			return newToasts;
		},
		onSuccess: (newToasts) => {
			queryClient.setQueryData(TOASTS_QUERY_KEY, newToasts);
		},
	});

	return {
		toasts,
		addToast: addToastMutation.mutate,
		updateToast: updateToastMutation.mutate,
		dismissToast: dismissToastMutation.mutate,
		removeToast: removeToastMutation.mutate,
	};
}

type Toast = Omit<ToasterToast, 'id'>;

function toast({ ...props }: Toast) {
	const id = genId();
	const store = useToastStore();

	const update = (props: ToasterToast) => {
		store.updateToast({ ...props, id });
	};

	const dismiss = () => {
		store.dismissToast(id);
		setTimeout(() => {
			store.removeToast(id);
		}, TOAST_REMOVE_DELAY);
	};

	store.addToast({
		...props,
		id,
		open: true,
		onOpenChange: (open) => {
			if (!open) dismiss();
		},
	});

	return {
		id,
		dismiss,
		update,
	};
}

function useToast() {
	const store = useToastStore();

	return {
		...store,
		toast,
		dismiss: (toastId?: string) => {
			store.dismissToast(toastId);
			if (toastId) {
				setTimeout(() => {
					store.removeToast(toastId);
				}, TOAST_REMOVE_DELAY);
			}
		},
	};
}

export { useToast, toast };
