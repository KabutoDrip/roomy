<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
    import {login, signUp} from '../../js/supabaseClient.mjs'
    let email = ''
    let password = ''
    let loading = false
    let errorMessage = ''

    async function handleLogin() {
        try {
            loading = true
            const {data, error} = await login({email, password})
            if(error) {
                throw error
            }
        } catch (err) {
            errorMessage = err
        } finally {
            loading = false
        }  
    }

    async function handleSignup() {
        try {
            loading = true
            const {data, error} = await signUp({email, password})
            if(error) {
                throw error
            }
        } catch (err) {
            errorMessage = err
        } finally {
            loading = false
        }
    }

</script>

<div class="row flex-center flex">
    <div class="col-6 form-widget" aria-live="polite">
        <h1 class="header">Supabase + Svelte</h1>
        <p class="description">Sign in below</p>
        <form class="form-widget" on:submit|preventDefault={handleLogin}>
            <div>
                <label for="email">Email</label>
                <input
                id="email"
                class="inputField"
                type="email"
                placeholder="Your email"
                bind:value={email}
                />
            </div>
            <div>
                <label for="password">Password</label>
                <input
                id="password"
                class="inputField"
                type="password"
                placeholder="Password"
                bind:value={password}
                />
            </div>
            {#if errorMessage}
                <p>{errorMessage}</p>
            {/if}
            <div>
                <button
                type="submit"
                class="button block"
                aria-live="polite"
                disabled={loading}
                >
                    <span>{loading ? "Loading" : "Login"}</span>
                </button>
                <button
                on:click={handleSignup}
                type="button"
                class="button block"
                aria-live="polite"
                disabled={loading}
                >
                    <span>{"Signup"}</span>
                </button>
            </div>
        </form>
    </div>
</div>