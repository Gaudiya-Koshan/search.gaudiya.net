import { supabase } from '$lib/supabaseClient';
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
		console.log('called');

		const formData = await request.formData();

		let searchPhrase = formData.get('search_phrase')?.toString().trim().toLowerCase();
		if (!searchPhrase) {
			searchPhrase = '';
		}
		let script = formData.get('script')?.toString();
		if (!script) {
			script = 'english_plain';
		}

		const searchResults = await searchSort(searchPhrase, script);
		// console.log('searchResults: ', searchResults);

		return searchResults;
	}
} satisfies Actions;

const searchSort = async (searchPhrase: string, script: string) => {
	//
	let query = '';
	let phrases = [];
	if (script == 'english_iast') {
		phrases = [searchPhrase];
	} else {
		// Create a new array of transformed key-value pairs

		phrases = await getSearchPhrases(searchPhrase, script);
	}

	// need to sort out which fields are being searched as well
	const fields = 'title' + '_' + 'description';

	// form search query from generated and user input phrases
	query = phrases.map((phrase) => `${fields}.fts.${phrase}`).join(',');

	// console.log('mappedKeys: ', mappedKeys);
	console.log('searchPhrase: ', searchPhrase);
	console.log('script: ', script);
	console.log('query: ', query);

	let searchResults = {};
	try {
		const { data, error } = await supabase
			.from('books')
			.select()
			// .textSearch(fields, searchPhrase)
			.or(query)
			.order('id', { ascending: false });

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

const getSearchPhrases = async (searchPhrase: string, script: string) => {
	//
	const thisDict = {};

	Object.keys(conversion_mappings).map((iast) => {
		// @ts-expect-error keys are variables so it spews
		const value = conversion_mappings[iast][script];
		if (value) {
			if (Array.isArray(value)) {
				// console.log(value);
				value.forEach((sub) => {
					if (sub in thisDict) {
						// @ts-expect-error keys are variables so it spews
						thisDict[sub].push(iast);
					} else {
						// @ts-expect-error keys are variables so it spews
						thisDict[sub] = [iast];
					}
				});
			} else {
				// @ts-expect-error keys are variables so it spews
				thisDict[value] = [iast];
			}
		}
	});
	// console.log(thisDict);

	const phrases = [searchPhrase];

	Object.keys(thisDict).map((searchChar) => {
		// @ts-expect-error keys are variables so it spews
		const replaceArray = thisDict[searchChar];
		// console.log(replaceArray);
		replaceArray.forEach((sub: string) => {
			// console.log(sub);
			phrases.forEach((thePhrase: string) => {
				const allCombinations: string[] = generateCombinations(thePhrase, searchChar, sub);

				// console.log(allCombinations);
				allCombinations.forEach((checkPhrase) => {
					// console.log(checkPhrase);

					if (!checkPhrase.includes('..')) {
						if (!phrases.includes(checkPhrase)) {
							phrases.push(checkPhrase);
							// console.log('phrases: ', phrases);
						}
					}
				});
			});
		});
	});

	console.log('All search phrases: ', phrases);

	return phrases;
};

function generateCombinations(word: string, search: string, replace: string): string[] {
	const combinations: string[] = [];
	// console.log('search: ', search, 'replace: ', replace);

	// Recursive function to generate combinations
	function generate(currentCombination: string, index: number): void {
		if (index === word.length) {
			combinations.push(currentCombination);
			return;
		}

		const char = word[index];
		if (char === search) {
			generate(currentCombination + search, index + 1);
			generate(currentCombination + replace, index + 1);
		} else if (char === replace) {
			generate(currentCombination + replace, index + 1);
			generate(currentCombination + search, index + 1);
		} else {
			generate(currentCombination + char, index + 1);
		}
	}

	// Start generation from index 0
	generate('', 0);

	const filteredCombinations: string[] = [];

	combinations.forEach((checkPhrase) => {
		if (!checkPhrase.includes('..')) {
			if (!filteredCombinations.includes(checkPhrase)) {
				filteredCombinations.push(checkPhrase);
			}
		}
	});
	// console.log('filteredCombinations: ', filteredCombinations);
	return filteredCombinations;
}
