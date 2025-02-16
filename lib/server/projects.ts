import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Project } from '@/types/project.types';

// Server-side function using Supabase directly
export async function getServerSideProject(id: string): Promise<Project> {
	const supabase = createServerComponentClient({ cookies });
	
	const { data: project, error } = await supabase
		.from('projects')
		.select('*')
		.eq('id', id)
		.single();
		
	if (error) throw new Error('Failed to fetch project');
	
	return project;
} 