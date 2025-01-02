import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/types/database.types';

export async function GET(): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		const { data: posts, error } = await supabase
			.from('posts')
			.select('*')
			.order('created_at', { ascending: false });	

		if (error) throw error;

		return NextResponse.json(posts);
	} catch (error) {
		return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 });
	}
}

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });
		const json = await request.json();

		// Get current user
		const { data: { user }, error: authError } = await supabase.auth.getUser();
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { data: post, error } = await supabase
			.from('posts')
			.insert({
				...json,
				author_id: user.id,
			})
			.select()
			.single();

		if (error) throw error;

		return NextResponse.json(post);
	} catch (error) {
		return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
	}
}
