<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { applyAction, deserialize, enhance } from '$app/forms';

	// export let data;
	let resultsData: any;

	let inputData = {
		searchPhrase: 'Śrī', // 'Circle of Friends' // 'Ṭhākura' // empty this when it goes live
		script: 'english_plain'
	};

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
	<div class="form search mt-2">
		<form
			method="POST"
			class="mx-2"
			action="?/fetchSearchResults"
			on:submit|preventDefault={fetchSearchResults}
			use:enhance
		>
			<div class="search input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md">
				<div class="input-group-shim">
					<Icon icon="line-md:search-filled" width="2em" height="2em" />
				</div>
				<input
					id="search_phrase"
					name="search_phrase"
					type="search"
					bind:value={inputData.searchPhrase}
					placeholder="Type your search phrase here in either Roman or Indic letters."
				/>
				<button class="variant-filled-secondary">Search</button>
			</div>
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
