'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState, useEffect } from 'react';

import type { Project } from '@/types/portfolio.types';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/helpers/use-toast';

export function ProjectEditor(): JSX.Element {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const supabase = createClientComponentClient();

	useEffect(() => {
		loadProjects();
	}, []);

	const loadProjects = async (): Promise<void> => {
		const { data, error } = await supabase
			.from('projects')
			.select('*')
			.order('created_at', { ascending: false });

		if (error) {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: error.message,
			});
		} else {
			setProjects(data);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		setLoading(true);

		try {
			const formData = new FormData(e.currentTarget);
			const { error } = await supabase.from('projects').insert({
				title: formData.get('title'),
				description: formData.get('description'),
				status: formData.get('status'),
				images: [{ url: formData.get('imageUrl'), alt: formData.get('imageAlt') }],
				features: formData
					.get('features')
					?.toString()
					.split(',')
					.map((f) => f.trim()),
				technologies: formData
					.get('technologies')
					?.toString()
					.split(',')
					.map((t) => t.trim()),
			});

			if (error) throw error;

			toast({
				title: 'Success',
				description: 'Project created successfully',
			});
			loadProjects();
			e.currentTarget.reset();
		} catch (error) {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: error instanceof Error ? error.message : 'Failed to create project',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-8">
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
					<Input name="features" placeholder="Features (comma-separated)" required />
					<Input name="technologies" placeholder="Technologies (comma-separated)" required />
					<Button type="submit" disabled={loading}>
						{loading ? 'Creating...' : 'Create Project'}
					</Button>
				</form>
			</Card>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold">Existing Projects</h2>
				{projects.map((project) => (
					<Card key={project.id} className="p-4">
						<h3 className="font-semibold">{project.title}</h3>
						<p className="text-sm text-muted-foreground">{project.description}</p>
						<div className="text-sm mt-2">
							Status: {project.status}
							<br />
							Technologies: {project.technologies.join(', ')}
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
