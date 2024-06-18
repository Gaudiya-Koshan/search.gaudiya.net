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
	<div class="basis-1">
		<div class="results">
			<h1 class="h1 text-primary-500">results</h1>
			<ul>
				{#each data.books as book}
					<li>{book.title}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
