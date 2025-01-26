'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
	tags: string[];
	selectedTags: string[];
	onTagSelect: (tag: string) => void;
	onTagsClear: () => void;
	onSearch: (query: string) => void;
}

export function SearchBar({
	tags,
	selectedTags,
	onTagSelect,
	onTagsClear,
	onSearch,
}: SearchBarProps) {
	const [query, setQuery] = useState('');

	const handleSearch = (value: string) => {
		setQuery(value);
		onSearch(value);
	};

	const handleClear = () => {
		setQuery('');
		onTagsClear();
	};

	return (
		<div className="space-y-4">
			<div className="flex gap-2">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						value={query}
						onChange={(e) => handleSearch(e.target.value)}
						placeholder="Search features..."
						className="pl-9"
					/>
				</div>
				{(query || selectedTags.length > 0) && (
					<Button variant="outline" size="icon" onClick={handleClear}>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>
			<div className="flex flex-wrap gap-2">
				{tags.map((tag) => (
					<Badge
						key={tag}
						variant={selectedTags.includes(tag) ? 'default' : 'outline'}
						className="cursor-pointer"
						onClick={() => onTagSelect(tag)}
					>
						{tag}
					</Badge>
				))}
			</div>
		</div>
	);
}
