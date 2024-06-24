<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { applyAction, deserialize, enhance } from '$app/forms';

	// export let data;
	let resultsData: any;

	let inputData = {
		searchPhrase: '',
		script: 'english_plain'
	};

	const chips = {
		Śrī: 'english_iast',
		sri: 'english_plain',
		kṛṣṇa: 'english_iast',
		Krishna: 'english_plain',
		caritāmṛta: 'english_iast',
		ghanaśyām: 'english_iast',
		Friends: 'english_plain',
		ॐ: 'devanāgarī'
	};

	function chipFill(chipText: string, chipScript: string) {
		// console.log(chipText, chipScript);
		inputData.searchPhrase = chipText;
		inputData.script = chipScript;
	}

	const fetchSearchResults = async (event: { currentTarget: EventTarget & HTMLFormElement }) => {
		const formData = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: formData
		});
		// console.log('response: ', response);

		const result: ActionResult = deserialize(await response.text());
		if (result.type == 'success') {
			let thisData = result.data;

			if (thisData?.books) {
				resultsData = thisData.books;
				// console.log('books: ', resultsData);
			}

			applyAction(result);
		}
	};
</script>

<div class="container w-11/12 m-auto">
	<div class="message variant-ghost-surface text-error-500 mt-4 p-3 rounded">
		<p>
			<span class="text-primary-500">Stardate 24 Jun 2024:</span> Currently, the only thing working is
			the 'No Diacritic' and 'IAST' searches. They might even be buggy. The logic is in place for all
			scripts to work, but my character map is innacurate and the letters and combinations of letters
			aren't playing nicely with the substitutes. It's not a difficult fix, but I need to spend the time
			going through each IAST character and making sure the other scripts are accurately matched.
		</p>
		<p class="flex justify-center text-primary-500">ys, Ekendra</p>
	</div>
	<div class="form search mt-2">
		<form
			method="POST"
			class="mx-2"
			action="?/fetchSearchResults"
			on:submit|preventDefault={fetchSearchResults}
		>
			<div class="filters">
				<div class="flex border rounded-md border-primary-500 my-4">
					<div class="py-3 my-auto px-5 bg-primary-500 text-sm mr-3 text-primary-900">English:</div>

					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="english_plain"
							bind:group={inputData.script}
						/>
						<div class="px-2">No Diacritics</div>
					</label>
					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="english_iast"
							bind:group={inputData.script}
						/>
						<div class="title px-2">IAST</div>
					</label>

					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="english_itrans"
							bind:group={inputData.script}
						/>
						<div class="title px-2">ITRANS</div>
					</label>
					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="english_velthius"
							bind:group={inputData.script}
						/>
						<div class="title px-2">Velthius</div>
					</label>

					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="english_harvard"
							bind:group={inputData.script}
						/>
						<div class="title px-2">Harvard Kyoto</div>
					</label>
				</div>
				<div class="flex border rounded-md border-primary-500 my-4">
					<div class="py-3 my-auto px-5 bg-primary-500 text-sm mr-3 text-primary-900">Indic:</div>

					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="devanāgarī"
							bind:group={inputData.script}
						/>
						<div class="title px-2">देवनागरी (Devanāgarī)</div>
					</label>
					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="oṛiā"
							bind:group={inputData.script}
						/>
						<div class="title px-2">ଓଋଇଆ (Oṛiā)</div>
					</label>
					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="bāṅlā"
							bind:group={inputData.script}
						/>
						<div class="title px-2">বাংলা (Bāṅlā)</div>
					</label>
					<label class="flex cursor-pointer m-auto w-max">
						<input
							class="my-auto"
							type="radio"
							name="script"
							value="brāhmī"
							bind:group={inputData.script}
						/>
						<div class="title px-2">𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻 (Brāhmī)</div>
					</label>
				</div>
			</div>
			<div class="search input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md">
				<div class="input-group-shim">
					<Icon icon="line-md:search-filled" width="2em" height="2em" />
				</div>
				<input
					id="search_phrase"
					name="search_phrase"
					type="search"
					bind:value={inputData.searchPhrase}
					placeholder="Select the appropriate script for your search phrase, then type it here in either Roman or (soon to be) Indic letters."
				/>
				<button class="variant-filled-secondary">Search</button>
			</div>
			<div class="chips mt-4">
				Or select from these presets:
				{#each Object.keys(chips) as chipText}
					<button
						class="chip mx-2 variant-filled-primary hover:variant-filled-secondary"
						on:click={() => chipFill(chipText, chips[chipText])}
					>
						<span>{chipText}</span>
					</button>
				{/each}
			</div>
		</form>
	</div>
	<div class="basis-1 my-5 mx-auto">
		<div class="results">
			{#if resultsData}
				<h1 class="h1 text-primary-500 my-5">results</h1>

				{#each resultsData as book}
					<div class="card px-4 py-2 my-2 variant-ghost-surface">
						<div class="grid grid-cols-3 gap-4">
							<div class="col-span-2">
								<div class=" text-xl">
									{book.title}{#if book.subtitle}: {book.subtitle}{/if}
								</div>
							</div>
							<div class="author text-primary-200-700-token">
								<p>Author: {book.author}</p>
							</div>
							<div class="description col-span-3 text-secondary-200-700-token">
								{book.description}
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
