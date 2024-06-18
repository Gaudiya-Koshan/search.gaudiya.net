<script>
	export let data;
</script>

<div class="container">
	<h1 class="h1 text-primary-500">search</h1>
	<ul>
		{#each data.books as book}
			<li>{book.title}</li>
		{/each}
	</ul>
</div>
