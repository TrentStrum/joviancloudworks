'use client';

import { useState, useMemo } from 'react';

import type { FeatureCardProps } from '@/components/features/feature-card';

export function useFeatureSearch(features: FeatureCardProps[]) {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState('');

	const allTags = useMemo(() => {
		const tags = new Set<string>();
		features.forEach((feature) => {
			feature.tags.forEach((tag) => tags.add(tag));
		});
		return Array.from(tags);
	}, [features]);

	const filteredFeatures = useMemo(() => {
		return features.filter((feature) => {
			const matchesTags =
				selectedTags.length === 0 || selectedTags.every((tag) => feature.tags.includes(tag));

			const matchesSearch =
				!searchQuery ||
				feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				feature.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

			return matchesTags && matchesSearch;
		});
	}, [features, selectedTags, searchQuery]);

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const clearFilters = () => {
		setSelectedTags([]);
		setSearchQuery('');
	};

	return {
		selectedTags,
		searchQuery,
		allTags,
		filteredFeatures,
		toggleTag,
		setSearchQuery,
		clearFilters,
	};
}
