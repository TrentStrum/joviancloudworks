export interface BlogPost {
	id: string;
	title: string;
	content: string;
	slug: string;
	featured?: boolean;
	highlighted?: boolean;
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
}

export type BlogPostFormData = {
	title: string;
	content: string;
	excerpt?: string;
	shortDescription?: string;
	category?: string;
	slug?: string;
};
