import { supabase } from '$lib/supabaseClient';
import type { Actions } from './$types.js';

export async function load() {
	const { data, error } = await supabase.from('books').select().order('id', { ascending: false });

	// if (data) {
	// 	console.log(data);
	// }
	// return {
	// 	books: data ?? []
	// };
}

export const actions = {
	fetchSearchResults: async ({ request }) => {
		const formData = await request.formData();

		let searchPhrase = formData.get('search_phrase')?.toString();
		searchPhrase ? (searchPhrase = searchPhrase.trim()) : (searchPhrase = '');

		console.log('searchPhrase: ', searchPhrase);
		// const { data, error } = await supabase
		// 	.from('books')
		// 	.select()
		// 	.eq('title', searchPhrase)
		// 	.order('id', { ascending: false });

		const { data, error } = await supabase
			.from('books')
			.select()
			.textSearch('title', searchPhrase)
			.order('id', { ascending: false });
		console.log(data);

		return {
			books: data ?? []
		};
	}
} satisfies Actions;
