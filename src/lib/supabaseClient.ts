import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

export const supabaseComputedColumns = {
	// to search a combination of columns in the database
	// we use PostGres 'computed columns' as described here:
	// https://tinyurl.com/2536zkqa

	title_description: ['title', 'description']
};
