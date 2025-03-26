'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock, Send } from 'lucide-react';
import { z } from 'zod';
import { toast } from 'sonner';

const contactFormSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email address'),
	subject: z.string().min(2, 'Subject must be at least 2 characters'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateForm = () => {
		try {
			contactFormSchema.parse(formData);
			setErrors({});
			return true;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
				error.errors.forEach((err) => {
					if (err.path[0]) {
						newErrors[err.path[0] as keyof ContactFormData] = err.message;
					}
				});
				setErrors(newErrors);
			}
			return false;
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send message');
			}

			toast.success('Message sent successfully!');
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			toast.error('Failed to send message. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name as keyof ContactFormData]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	return (
		<main className="min-h-screen pt-24 pb-16">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
						<p className="text-xl text-muted-foreground">
							Get in touch with our team for any inquiries or support
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="text-2xl font-semibold">Contact Information</h2>
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<Mail className="w-5 h-5 text-primary" />
										<p>contact@joviancloudworks.com</p>
									</div>
									<div className="flex items-center space-x-3">
										<Phone className="w-5 h-5 text-primary" />
										<p>+1 (626) 234-9057</p>
									</div>
									{/* <div className="flex items-center space-x-3">
										<MapPin className="w-5 h-5 text-primary" />
										<p>123 Cloud Street, Silicon Valley, CA 94025</p>
									</div> */}
									<div className="flex items-center space-x-3">
										<Clock className="w-5 h-5 text-primary" />
										<p>Mon-Fri: 9:00 AM - 6:00 PM PST</p>
									</div>
								</div>
							</div>

							{/* <div className="space-y-4">
								<h2 className="text-2xl font-semibold">Office Hours</h2>
								<div className="space-y-2">
									<p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
									<p>Saturday: 10:00 AM - 4:00 PM PST</p>
									<p>Sunday: Closed</p>
								</div>
							</div> */}
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Input
									type="text"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleChange}
									className={errors.name ? 'border-destructive' : ''}
								/>
								{errors.name && (
									<p className="text-sm text-destructive mt-1">{errors.name}</p>
								)}
							</div>

							<div>
								<Input
									type="email"
									name="email"
									placeholder="Your Email"
									value={formData.email}
									onChange={handleChange}
									className={errors.email ? 'border-destructive' : ''}
								/>
								{errors.email && (
									<p className="text-sm text-destructive mt-1">{errors.email}</p>
								)}
							</div>

							<div>
								<Input
									type="text"
									name="subject"
									placeholder="Subject"
									value={formData.subject}
									onChange={handleChange}
									className={errors.subject ? 'border-destructive' : ''}
								/>
								{errors.subject && (
									<p className="text-sm text-destructive mt-1">{errors.subject}</p>
								)}
							</div>

							<div>
								<Textarea
									name="message"
									placeholder="Your Message"
									value={formData.message}
									onChange={handleChange}
									className={`min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
								/>
								{errors.message && (
									<p className="text-sm text-destructive mt-1">{errors.message}</p>
								)}
							</div>

							<Button type="submit" className="w-full" disabled={isSubmitting}>
								{isSubmitting ? (
									<>
										<div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-r-white" />
										Sending...
									</>
								) : (
									<>
										Send Message
										<Send className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</form>
					</div>
				</motion.div>
			</Container>
		</main>
	);
}
