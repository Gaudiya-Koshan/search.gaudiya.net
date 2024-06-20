<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { applyAction, deserialize } from '$app/forms';

	export let data;
	let resultsData: any;

	let inputData = {
		searchPhrase: 'Śrī' // 'Circle of Friends' // 'Ṭhākura' // empty this when it goes live
	};

	const fetchSearchResults = async (event: { currentTarget: EventTarget & HTMLFormElement }) => {
		const formData = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: formData
		});

		const result: ActionResult = deserialize(await response.text());
		if (result.type == 'success') {
			let thisData = result.data;

			if (thisData?.books) {
				resultsData = thisData.books;
				console.log('books: ', resultsData);
			}

			applyAction(result);
		}
	};
</script>

<div class="container grid-cols-1 w-11/12 m-auto">
	<div class="basis-1">
		<div class="search mt-2">
			<form
				method="POST"
				class="flex flex-row items-center mx-2 justify-stretch"
				action="?/fetchSearchResults"
				on:submit|preventDefault={fetchSearchResults}
			>
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
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
			</form>
		</div>
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
