import { Database } from '@/types/supabase.types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		// Get current user
		const { data: { user }, error: authError } = await supabase.auth.getUser();
		
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		// Update all posts to set featured = false
		const { error } = await supabase
			.from('posts')
			.update({ featured: false })
			.neq('featured', false); // Only update currently featured posts

		if (error) {
			console.error('Unfeature all error:', error);
			throw error;
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Unexpected error:', error);
		return NextResponse.json(
			{ error: 'Error unfeaturing posts' }, 
			{ status: 500 }
		);
	}
} 