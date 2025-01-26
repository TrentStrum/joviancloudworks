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

export interface Database {
	public: {
		Tables: {
			// Your table definitions here
		};
		Views: {
			// Your view definitions here
		};
		Functions: {
			// Your function definitions here
		};
	};
}
