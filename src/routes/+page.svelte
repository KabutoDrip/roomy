<script>
    import { onMount } from "svelte";
	import Login from "../lib/components/Login.svelte";
	import {userStore} from "../lib/js/stores.mjs"
	import {checkLogin} from "../lib/js/supabaseClient.mjs"

	async function init(){
		await checkLogin();
	}
	onMount()
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if $userStore.isLoggedIn}
	<p>Logedn In!</p>
	{:else}
	<Login />
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
