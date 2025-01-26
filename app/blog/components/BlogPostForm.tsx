'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Hash, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import type { BlogPost } from '@/types/blog.types';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	content: z.string().min(1, 'Content is required'),
	shortDescription: z.string().min(1, 'Short description is required'),
	category: z.string().min(1, 'Category is required'),
	excerpt: z.string().optional(),
	featured: z.boolean().default(false),
	tags: z.array(z.string()).default([]),
	image_url: z.string().default('/Jupiter.png'),
});

type FormData = z.infer<typeof formSchema>;

interface BlogPostFormProps {
	post?: BlogPost | null;
	onSubmit: (data: FormData) => void;
	onChange?: (e: React.FormEvent<HTMLFormElement>) => void;
	setEditingPost: (post: BlogPost | null) => void;
}

export function BlogPostForm({
	post,
	onSubmit,
	onChange,
	setEditingPost,
}: BlogPostFormProps): JSX.Element {
	const [tagInput, setTagInput] = useState('');
	const [tags, setTags] = useState<string[]>(post?.tags || []);

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: post?.title || '',
			content: post?.content || '',
			shortDescription: post?.shortDescription || '',
			category: post?.category || '',
			excerpt: post?.excerpt || '',
			featured: post?.featured || false,
			tags: post?.tags || [],
			image_url: post?.image_url || '/Jupiter.png',
		},
	});

	const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && tagInput.trim()) {
			e.preventDefault();
			const newTag = tagInput.trim();
			if (!tags.includes(newTag)) {
				setTags([...tags, newTag]);
			}
			setTagInput('');
		}
	};

	const removeTag = (tagToRemove: string) => {
		setTags(tags.filter((tag) => tag !== tagToRemove));
	};

	const handleSubmit = (data: FormData) => {
		onSubmit({ ...data, tags });
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} onChange={onChange} className="space-y-6">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="shortDescription"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Short Description</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Brief description for featured posts" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<Input {...field} placeholder="e.g., Technology, Design, Development" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormItem>
					<FormLabel>Tags</FormLabel>
					<div className="flex flex-wrap gap-2 mb-2">
						{tags.map((tag) => (
							<Badge
								key={tag}
								variant="secondary"
								className="group bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
							>
								<Hash className="w-3 h-3 mr-1" />
								{tag}
								<X
									className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 cursor-pointer"
									onClick={() => removeTag(tag)}
								/>
							</Badge>
						))}
					</div>
					<Input
						placeholder="Add tags (press Enter)"
						value={tagInput}
						onChange={(e) => setTagInput(e.target.value)}
						onKeyDown={handleTagKeyDown}
					/>
				</FormItem>

				<FormField
					control={form.control}
					name="excerpt"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Excerpt (Optional)</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									placeholder="Brief preview of the post content"
									className="h-20"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<RichTextEditor content={field.value} onChange={field.onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image URL</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Image URL" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="featured"
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center space-x-2">
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
										className="border border-muted-foreground [&>span]:border [&>span]:border-muted-foreground data-[state=checked]:[&>span]:bg-primary data-[state=checked]:bg-transparent"
									/>
								</FormControl>
								<FormLabel>Featured Post</FormLabel>
							</div>
						</FormItem>
					)}
				/>

				<div className="flex gap-2">
					<Button type="submit">{post ? 'Update Post' : 'Create Post'}</Button>
					{post && (
						<Button
							type="button"
							variant="outline"
							onClick={() => {
								form.reset({
									title: '',
									content: '',
									shortDescription: '',
									category: '',
									excerpt: '',
									featured: false,
									tags: [],
									image_url: '/Jupiter.png',
								});
								setTags([]);
								setEditingPost(null);
							}}
						>
							Cancel Edit
						</Button>
					)}
				</div>
			</form>
		</Form>
	);
}
