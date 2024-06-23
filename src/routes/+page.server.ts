import { supabase, supabaseComputedColumns } from '$lib/supabaseClient';
import type { Actions } from './$types.js';
import { conversion_mappings } from '$lib/conversion/conversion_mappings.js';

// export async function load() {
// 	const { data, error } = await supabase.from('books').select().order('id', { ascending: false });

// 	// if (data) {
// 	// 	console.log(data);
// 	// }
// 	// return {
// 	// 	books: data ?? []
// 	// };
// }

export const actions = {
	fetchSearchResults: async ({ request }) => {
		const formData = await request.formData();

		let searchPhrase = formData.get('search_phrase')?.toString().trim();
		if (!searchPhrase) {
			searchPhrase = '';
		}
		const script = formData.get('script')?.toString();
		console.log('searchPhrase: ', searchPhrase);
		console.log('script: ', script);

		const searchResults = await searchSort(searchPhrase);
		// console.log('searchResults: ', searchResults);

		return searchResults;
	}
} satisfies Actions;

const searchSort = async (searchPhrase: string) => {
	// a: {
	// key: 1, // just a numeric key for convenience
	// description: 'short a', // explanation in English for what the character is
	// iast: 'a', // International Alphabet of Sanskrit Transliteration = what our database must use for all fields
	// english: ['a'], // various English spellings that we anticipate the user might type into a search field
	// velthuis: 'a', // the Velthuis system of transliteration is a (tragic) ASCII transliteration scheme, included here in case it's ever needed
	// itrans: 'a', // Indian languages TRANSliteration (ITRANS) is another ASCII transliteration scheme that avoids diacritics
	// harvard_kyoto: 'a', // Harvard-Kyoto Convention is another ASCII system. It is/was predominantly used informally in e-mail.
	// devanāgarī: 'अ', // Unicode Devanāgarī characters
	// bāṅlā: 'অ', // Unicode bāṅlā characters
	// oṛiā: 'ଅ', // Unicode oṛiā characters
	// brāhmī: '𑀅' // Unicode Brāhmī characters because ... why not?
	// },

	let searchResults = {};
	try {
		const { data, error } = await supabase
			.from('books')
			.select()
			.textSearch('title_description', searchPhrase)
			.order('id', { ascending: false });
		// console.log(data);

		if (data) {
			searchResults = data;
		} else if (error) {
			console.log(error);
			throw error;
		}

		return {
			books: searchResults ?? []
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};
