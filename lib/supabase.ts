import { createClient } from '@supabase/supabase-js';

import type { Database } from '@/types/database.types';
import type { SupabaseClient } from '@supabase/supabase-js';

export function getSupabase(): SupabaseClient<Database> {
	return createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
}

export const supabase = getSupabase();
