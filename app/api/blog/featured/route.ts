import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/types/supabase.types';

export async function GET(): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		const { data: post, error } = await supabase
			.from('posts')
			.select('*')
			.eq('featured', true)
			.single();

		if (error) throw error;
		if (!post) {
			return NextResponse.json({ error: 'No featured post found' }, { status: 404 });
		}

		return NextResponse.json(post);
	} catch (error) {
		console.error('Error fetching featured post:', error);
		return NextResponse.json({ error: 'Error fetching featured post' }, { status: 500 });
	}
}
