import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/types/supabase.types';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const page = searchParams.get('page') || '1';
	const searchTerm = searchParams.get('searchTerm');
	const sortBy = searchParams.get('sortBy');

	const supabase = createRouteHandlerClient({ cookies });
	let query = supabase.from('posts').select('*');

	// Handle sort options
	switch (sortBy) {
		case 'newest':
			query = query.order('created_at', { ascending: false });
			break;
		case 'oldest':
			query = query.order('created_at', { ascending: true });
			break;
		default:
			query = query.order('created_at', { ascending: false });
	}

	if (searchTerm) {
		query = query.or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`);
	}

	const { data, error } = await query
		.range((parseInt(page) - 1) * 10, parseInt(page) * 10 - 1);

	if (error) return NextResponse.json({ error: error.message }, { status: 500 });
	return NextResponse.json(data);
}

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });
		const { title, content, image_url, featured } = await request.json();

		// Get current user
		const { data: { user }, error: authError } = await supabase.auth.getUser();
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { data: post, error } = await supabase
			.from('posts')
			.insert({
				title,
				content,
				image_url,
				featured,
			})
			.select()
			.single();

		if (error) throw error;

		return NextResponse.json(post);
	} catch (error) {
		console.error('Create post error:', error);
		return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
	}
}
