import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const postSchema = z.object({
	title: z.string().min(1, 'Title is required').max(100),
	content: z.string().min(1, 'Content is required'),
	image_url: z.string().url('Invalid image URL'),
});

export const featureSchema = z.object({
	title: z.string().min(1, 'Title is required').max(100),
	description: z.string().min(1, 'Description is required'),
	image_url: z.string().url('Invalid image URL'),
	tags: z.array(z.string()),
	demo_url: z.string().url('Invalid demo URL'),
});
