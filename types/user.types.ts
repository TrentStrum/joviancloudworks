// Base user properties
export type BaseUser = {
	id: string;
	email: string;
	last_sign_in_at: string | null;
};

// Export a type alias for the most commonly used user type
export type User = DatabaseProfile;

export type DatabaseProfile = {
	id: string;
	email: string;
	last_sign_in_at: string | null;
};
