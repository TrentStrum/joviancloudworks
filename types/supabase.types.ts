export interface Database {
	public: {
		Tables: {
			blog_posts: {
				Row: {
					id: string;
					created_at: string;
					title: string;
					content: string;
					author_id: string;
					published: boolean;
					updated_at: string | null;
				};
				Insert: {
					id?: string;
					created_at?: string;
					title: string;
					content: string;
					author_id: string;
					published?: boolean;
					updated_at?: string | null;
				};
				Update: {
					id?: string;
					created_at?: string;
					title?: string;
					content?: string;
					author_id?: string;
					published?: boolean;
					updated_at?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
} 