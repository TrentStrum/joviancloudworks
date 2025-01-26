import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
	console.error('Missing Supabase credentials. Please check your .env.local file.');
	process.exit(1);
}

// Use service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function createAdminUser(email: string, password: string) {
	try {
		// Create a new user with admin role
		const {
			data: { user },
			error: signUpError,
		} = await supabase.auth.admin.createUser({
			email,
			password,
			email_confirm: true, // Automatically confirm the email
			user_metadata: {
				role: 'admin',
			},
		});

		if (signUpError) throw signUpError;
		if (!user) throw new Error('No user returned after signup');

		console.log('Admin user created successfully:', user.email);
		return user;
	} catch (error) {
		console.error('Error creating admin user:', error);
		throw error;
	}
}

// Get admin credentials from environment or use defaults for development
const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'securepassword123';

createAdminUser(adminEmail, adminPassword)
	.then(() => {
		console.log('Admin user creation completed');
		process.exit(0);
	})
	.catch((error) => {
		console.error('Failed to create admin user:', error);
		process.exit(1);
	});
