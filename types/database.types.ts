export interface TimelineEntry {
	title: string;
	content: React.ReactNode;
	// Add other timeline entry properties as needed
}

export interface Project {
	id: string;
	status: 'draft' | 'published' | 'archived';
	pricing: boolean;
	// ... other project fields
}
