import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/lib/types/supabase';

interface RouteParams {
	params: {
		id: string;
	};
}

export async function GET(request: Request, { params }: RouteParams): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		const { data: post, error } = await supabase
			.from('blog_posts')
			.select('*')
			.eq('id', params.id)
			.single();

		if (error) throw error;
		if (!post) {
			return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
		}

		return NextResponse.json(post);
	} catch (error) {
		return NextResponse.json({ error: 'Error fetching blog post' }, { status: 500 });
	}
}

export async function PUT(request: Request, { params }: RouteParams): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });
		const json = await request.json();

		// Get current user
		const { data: { user }, error: authError } = await supabase.auth.getUser();
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		// Verify post ownership
		const { data: existingPost } = await supabase
			.from('blog_posts')
			.select('author_id')
			.eq('id', params.id)
			.single();

		if (!existingPost || existingPost.author_id !== user.id) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { data: post, error } = await supabase
			.from('blog_posts')
			.update(json)
			.eq('id', params.id)
			.select()
			.single();

		if (error) throw error;

		return NextResponse.json(post);
	} catch (error) {
		return NextResponse.json({ error: 'Error updating blog post' }, { status: 500 });
	}
}

export async function DELETE(request: Request, { params }: RouteParams): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		// Get current user
		const { data: { user }, error: authError } = await supabase.auth.getUser();
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		// Verify post ownership
		const { data: existingPost } = await supabase
			.from('blog_posts')
			.select('author_id')
			.eq('id', params.id)
			.single();

		if (!existingPost || existingPost.author_id !== user.id) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { error } = await supabase
			.from('blog_posts')
			.delete()
			.eq('id', params.id);

		if (error) throw error;

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: 'Error deleting blog post' }, { status: 500 });
	}
} 