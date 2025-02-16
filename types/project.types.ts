export type Project = {
	id: string;
	title: string;
	description: string;
	featured: boolean;
	featured_location: '1' | '2' | '3' | '4';
	featured_description?: string;
	created_at: string;
	updated_at: string;
	status: 'upcoming' | 'live' | 'archived';
	technologies: string[];
	image_url?: string;
	github_url?: string;
	live_url?: string;
	features?: ProjectFeature[];
	facts?: ProjectFact[];
};


export interface ExistingProject {
	id: string;
	title: string;
	description: string;
	featured: boolean;
	featured_location: '1' | '2' | '3' | '4';
	featured_description?: string;
	created_at: string;
	updated_at: string;
	features?: ProjectFeature[];
	facts?: ProjectFact[];
}



export interface ProjectFeature {
	id: string;
	title: string;
	description: string;
	position: number; // 1-4 for different skeleton layouts
	projectId: string;
}	

export interface ProjectFact {
	id: string;
	title: string;
	description: string;
}