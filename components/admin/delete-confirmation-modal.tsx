import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

interface DeleteConfirmationModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => Promise<void>;
	title?: string;
	description?: string;
}

export function DeleteConfirmationModal({
	isOpen,
	onClose,
	onConfirm,
	title = 'Confirm Delete',
	description = 'Are you sure you want to delete this post? This action cannot be undone.',
}: DeleteConfirmationModalProps): JSX.Element {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<DialogFooter className="gap-2 sm:gap-0">
					<Button variant="outline" onClick={onClose}>
						Cancel
					</Button>
					<Button
						variant="destructive"
						onClick={async () => {
							await onConfirm();
							onClose();
						}}
					>
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
