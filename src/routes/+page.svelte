<script>
	export let data;
</script>

<div class="container grid-cols-1 m-4">
	<div class="basis-1">
		<div class="search">
			<input
				class="input"
				type="text"
				placeholder="Type your search phrase here in either Roman or Indic letters."
			/>
		</div>
	</div>
	<div class="basis-1 my-5">
		<div class="results">
			<h1 class="h1 text-primary-500 my-5">results</h1>

			{#each data.books as book}
				<div class="card px-4 py-2 my-2">
					<div class="grid-cols-3">
						<div class="col-span-3">
							<h3>{book.title}</h3>
						</div>
						<div class="author text-secondary-200-700-token"><p>{book.author}</p></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
