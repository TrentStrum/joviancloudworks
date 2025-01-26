export const dynamic = 'force-dynamic';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { name, email, company, message } = await request.json();

		if (!process.env.RESEND_API_KEY) {
			throw new Error('Missing Resend API key');
		}

		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'trent.strum@joviancloudworks.com', // Replace with your email
			subject: `New Contact Form Submission from ${name}`,
			text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Message: ${message}
      `,
		});

		return Response.json({ success: true });
	} catch (error) {
		console.error('Contact form error:', error);
		return Response.json(
			{ error: error instanceof Error ? error.message : 'Failed to send email' },
			{ status: 500 }
		);
	}
}
