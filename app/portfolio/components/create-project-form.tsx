'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/helpers/use-toast';
import { useRouter } from 'next/navigation';

export function CreateProjectForm(): JSX.Element {
	const router = useRouter();
	const { toast } = useToast();
	const supabase = createClientComponentClient();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		setLoading(true);

		try {
			// Verify user session and role first
			const { data: { session }, error: sessionError } = await supabase.auth.getSession();
			if (sessionError) throw sessionError;
			
			if (session?.user?.user_metadata?.role !== 'admin') {
				throw new Error('Unauthorized: Admin access required');
			}

			const formData = new FormData(e.currentTarget);
			const projectData = {
				title: formData.get('title'),
				description: formData.get('description'),
				status: formData.get('status'),
				images: [{ url: formData.get('imageUrl'), alt: formData.get('imageAlt') }],
				features: formData.get('features')?.toString().split(',').map(f => f.trim()),
				technologies: formData.get('technologies')?.toString().split(',').map(t => t.trim()),
				featured: formData.get('featured') === 'true',
				featured_location: formData.get('featured_location'),
				featured_image: formData.get('featured_image'),
				featured_description: formData.get('featured_description'),
			};

			console.log('Submitting project data:', projectData); // Debug log

			const { data, error } = await supabase
				.from('projects')
				.insert(projectData)
				.select()
				.single();

			if (error) {
				console.error('Supabase error:', error); // Debug log
				throw error;
			}

			console.log('Created project:', data); // Debug log

			toast({
				title: "Success",
				description: "Project created successfully",
			});
			router.refresh();
			router.push('/portfolio');
		} catch (error) {
			console.error('Form submission error:', error); // Debug log
			toast({
				variant: "destructive",
				title: "Error",
				description: error instanceof Error ? error.message : 'Failed to create project',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card className="p-6">
			<h2 className="text-xl font-semibold mb-4">Create New Project</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<Input name="title" placeholder="Project Title" required />
				<Textarea name="description" placeholder="Project Description" required />
				<Select name="status" required>
					<SelectTrigger>
						<SelectValue placeholder="Select Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="upcoming">Upcoming</SelectItem>
						<SelectItem value="live">Live</SelectItem>
					</SelectContent>
				</Select>
				<Input name="imageUrl" placeholder="Image URL" required />
				<Input name="imageAlt" placeholder="Image Alt Text" required />
				<Input 
					name="features" 
					placeholder="Features (comma-separated)" 
					required 
				/>
				<Input 
					name="technologies" 
					placeholder="Technologies (comma-separated)" 
					required 
				/>
				<div className="space-y-4 mt-8 pt-4 border-t">
					<h3 className="font-semibold">Featured Solution Settings</h3>
					<Select name="featured">
						<SelectTrigger>
							<SelectValue placeholder="Feature on Landing Page?" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="true">Yes</SelectItem>
							<SelectItem value="false">No</SelectItem>
						</SelectContent>
					</Select>
					<Select name="featured_location">
						<SelectTrigger>
							<SelectValue placeholder="Featured Location" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">Track Issues</SelectItem>
							<SelectItem value="2">AI Pictures</SelectItem>
							<SelectItem value="3">YouTube</SelectItem>
							<SelectItem value="4">Deploy</SelectItem>
						</SelectContent>
					</Select>
					<Input name="featured_image" placeholder="Featured Image URL" />
					<Textarea name="featured_description" placeholder="Featured Description" />
				</div>
				<Button type="submit" className="mt-6" disabled={loading}>
					{loading ? 'Creating...' : 'Create Project'}
				</Button>
			</form>
		</Card>
	);
}
