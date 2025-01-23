export type Project = {
	id: string;
	title: string;
	description: string;
	featured: boolean;
	featured_location: '1' | '2' | '3' | '4';
	featured_description?: string;
	created_at: string;
	updated_at: string;
	status: 'draft' | 'published' | 'archived';
	technologies: string[];
	image_url?: string;
	github_url?: string;
	live_url?: string;
};

export interface ExistingProject {
	id: string;
	title: string;
	// ... rest of existing fields
}
