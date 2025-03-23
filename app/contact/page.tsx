'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ParticlesBackground } from '@/components/particles-background';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<main className="min-h-screen pt-24 pb-16">
			<ParticlesBackground />
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
										<p>+1 (555) 123-4567</p>
									</div>
									<div className="flex items-center space-x-3">
										<MapPin className="w-5 h-5 text-primary" />
										<p>123 Cloud Street, Silicon Valley, CA 94025</p>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="w-5 h-5 text-primary" />
										<p>Mon-Fri: 9:00 AM - 6:00 PM PST</p>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h2 className="text-2xl font-semibold">Office Hours</h2>
								<div className="space-y-2">
									<p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
									<p>Saturday: 10:00 AM - 4:00 PM PST</p>
									<p>Sunday: Closed</p>
								</div>
							</div>
						</div>

						<div className="space-card p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-4">
									<div>
										<label htmlFor="name" className="block text-sm font-medium mb-2">
											Name
										</label>
										<Input
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="Your name"
											required
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium mb-2">
											Email
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="your@email.com"
											required
										/>
									</div>
									<div>
										<label htmlFor="subject" className="block text-sm font-medium mb-2">
											Subject
										</label>
										<Input
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											placeholder="How can we help?"
											required
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium mb-2">
											Message
										</label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Your message..."
											rows={5}
											required
										/>
									</div>
								</div>
								<Button type="submit" className="w-full">
									Send Message
									<Send className="ml-2 h-4 w-4" />
								</Button>
							</form>
						</div>
					</div>
				</motion.div>
			</Container>
		</main>
	);
}
