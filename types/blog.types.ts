export interface BlogPost {
	id: string | number;
	title: string;
	content: string;
	slug: string;
	featured?: boolean;
	tags?: string[];
	created_at: string;
	updated_at: string;
	published_at?: string;
	excerpt?: string;
	shortDescription?: string;
	profiles?: {
		username?: string;
		full_name?: string;
	} | null;
	category?: string;
	coverImage?: string;
	author?: {
		id: string;
		username?: string;
		full_name?: string;
		role: string;
	};
	readTime?: string;
	image_url?: string;
	views: number;
}

export interface BlogPostFormData {
	title: string;
	content: string;
	image_url?: string;
	featured: boolean;
	tags?: string[];
}
