import { redirect } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { CreateProjectForm } from '../components/create-project-form';

export default async function CreateProjectPage(): Promise<JSX.Element> {
	const supabase = createServerComponentClient({ cookies });
	const { data: { session } } = await supabase.auth.getSession();
	const { data: profile } = await supabase
		.from('profiles')
		.select('role')
		.eq('id', session?.user?.id)
		.single();

	if (!session || profile?.role !== 'admin') {
		redirect('/');
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-2xl font-bold mb-6">Create New Project</h1>
			<div className="max-w-2xl">
				<CreateProjectForm />
			</div>
		</div>
	);
}
