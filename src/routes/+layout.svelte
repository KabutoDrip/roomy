<script>
	import Header from './Header.svelte';
	// import '../scss/styles.scss';
  import Appshell from './Appshell.svelte';
</script>

<div class="app">
	<Appshell />

	<main>
		<slot />
	</main>
</div>

<style>
</style>
