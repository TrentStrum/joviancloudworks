'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
	
type Props = {
	sortBy: string;
	setSortBy: (value: string) => void;
};

export function Filters({ sortBy, setSortBy }: Props) {
	return (
		<div className="mb-6 p-4 border rounded-lg">
			<label htmlFor="sort-trigger" className="text-sm font-medium mb-1 block">
				Sort by
				<Select value={sortBy} onValueChange={setSortBy}>
					<SelectTrigger id="sort-trigger">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="newest">Newest first</SelectItem>
						<SelectItem value="oldest">Oldest first</SelectItem>
						<SelectItem value="a-z">Title A-Z</SelectItem>
						<SelectItem value="z-a">Title Z-A</SelectItem>
					</SelectContent>
				</Select>
			</label>
		</div>
	);
}
