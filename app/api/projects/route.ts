import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
	const supabase = createRouteHandlerClient({ cookies });

	const { data, error } = await supabase
		.from('projects')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) return NextResponse.json({ error: error.message }, { status: 500 });
	return NextResponse.json(data);
}

export async function POST(request: Request) {
	try {
		const supabase = createRouteHandlerClient({ cookies });
		
		// Check if user is authenticated and admin
		const { data: { session } } = await supabase.auth.getSession();
		const { data: profile } = await supabase
			.from('profiles')
			.select('role')
			.eq('id', session?.user?.id)
			.single();

		if (!session || profile?.role !== 'admin') {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const data = await request.json();
		const { data: project, error } = await supabase
			.from('projects')
			.insert([data])
			.select()
			.single();

		if (error) throw error;
		return NextResponse.json(project);
	} catch (error) {
		return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
	}
}