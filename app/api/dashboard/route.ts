import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(): Promise<NextResponse> {
	const supabase = createRouteHandlerClient({ cookies });

	try {
		await supabase.auth.signOut();
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Sign out error:', error);
		return NextResponse.json({ error: 'Failed to sign out' }, { status: 500 });
	}
}
