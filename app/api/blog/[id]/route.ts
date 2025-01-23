import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/types/supabase.types';

interface RouteParams {
	params: {
		id: string;
	};
}

export async function GET(request: Request, { params }: RouteParams): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		const { data: post, error } = await supabase
			.from('posts')
			.select('*')
			.eq('id', params.id)
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		if (!post) {
			return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
		}

		return NextResponse.json(post);
	} catch (error) {
		console.error('Server error:', error);
		return NextResponse.json(
			{ error: 'Error fetching blog post' }, 
			{ status: 500 }
		);
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } }
): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });
		const data = await request.json();
		console.log('Updating post:', { id: params.id, data });

		const { data: { user }, error: authError } = await supabase.auth.getUser();
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const { data: post, error } = await supabase
			.from('posts')
			.update({
				title: data.title,
				content: data.content,
				short_description: data.shortDescription,
				excerpt: data.excerpt,
				featured: data.featured,
				tags: data.tags,
				image_url: data.image_url,
				updated_at: new Date().toISOString()
			})
			.eq('id', params.id)
			.select()
			.maybeSingle();

		if (error || !post) {
			console.error('Supabase error:', error);
			return NextResponse.json({ 
				error: error?.message || 'Post not found' 
			}, { status: error ? 500 : 404 });
		}

		return NextResponse.json(post);
	} catch (error) {
		console.error('Update post error:', error);
		return NextResponse.json({ 
			error: error instanceof Error ? error.message : 'Error updating blog post' 
		}, { status: 500 });
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
): Promise<NextResponse> {
	try {
		const supabase = createRouteHandlerClient<Database>({ cookies });

		// Get current user
		const { data: { user }, error: authError } = await supabase.auth.getUser();
		console.log('Auth check:', { user: user?.id, authError });
		
		if (authError || !user) {
			return NextResponse.json({ error: 'Unauthorized - No user found' }, { status: 401 });
		}

		// Delete the post
		const { error } = await supabase
			.from('posts')
			.delete()
			.eq('id', params.id);

		if (error) {
			console.log('Delete error:', error);
			throw error;
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Unexpected error:', error);
		return NextResponse.json({ error: 'Error deleting blog post' }, { status: 500 });
	}
} 