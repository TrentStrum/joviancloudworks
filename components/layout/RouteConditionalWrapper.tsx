'use client';

import { usePathname } from 'next/navigation';
import { FloatingDock } from './FloatingDock';

export function RouteConditionalWrapper(): JSX.Element | null {
	const pathname = usePathname();
	const isAdminRoute = pathname.startsWith('/admin');

	if (isAdminRoute) {
		return null;
	}

	return <FloatingDock />;
} 