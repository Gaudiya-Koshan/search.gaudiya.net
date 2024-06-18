import { supabase } from '$lib/supabaseClient';

export async function load() {
	console.log('loaded ....');
	const { data } = await supabase.from('books').select();
	console.log(data);
	return {
		books: data ?? []
	};
}
