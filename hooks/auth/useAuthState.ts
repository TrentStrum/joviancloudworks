import { useEffect, useState } from 'react';
import { User } from '@/types/user.types';

export function useAuthState() {
	const [user, setUser] = useState<User | null>(null);

	return { user };
}
