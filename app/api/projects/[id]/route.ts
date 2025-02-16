import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const supabase = createRouteHandlerClient({ cookies });

		const { data: project, error } = await supabase
			.from('projects')
			.select('*')
			.eq('id', params.id)
			.single();

		if (error) {
			return NextResponse.json(
				{ error: 'Project not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(project);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch project' },
			{ status: 500 }
		);
	}
}
