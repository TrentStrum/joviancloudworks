'use client';

import { usePathname } from 'next/navigation';


export function RouteConditionalWrapper(): JSX.Element | null {
	const pathname = usePathname();
	
	if (typeof pathname !== 'string') {
		return null;
	}

	const isAdminRoute = pathname.startsWith('/admin');

	if (isAdminRoute) {
		return <div className="admin-wrapper">{/* Admin specific content */}</div>;
	}

	return null; // floating dock goes here
}
