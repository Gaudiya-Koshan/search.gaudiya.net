<script>
	export let data;
</script>

<div class="container">
	<div class="search">
		<label class="label">
			<span>Input</span>
			<input class="input" type="text" placeholder="Input" />
		</label>
	</div>

	<div class="results">
		<h1 class="h1 text-primary-500">results</h1>
		<ul>
			{#each data.books as book}
				<li>{book.title}</li>
			{/each}
		</ul>
	</div>
</div>
