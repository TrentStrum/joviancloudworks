import { ToastActionElement } from '@/components/ui/toast';
import { useToast as useToastBase } from '@/components/ui/use-toast';

interface ToastOptions {
	title?: string;
	description?: React.ReactNode;
	action?: ToastActionElement;
	duration?: number;
}

export function useToast() {
	const { toast, dismiss, toasts } = useToastBase();

	return {
		toast: (props: ToastOptions) => toast(props),
		dismiss,
		toasts,
	};
}
