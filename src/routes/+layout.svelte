<script>
  // import '../scss/styles.scss';
  import Appshell from "./Appshell.svelte";
</script>

<div class="app">
  <Appshell />

  <main>
    <slot />
  </main>
</div>

<style>
  main {
    height: 100vh;
  }
</style>
