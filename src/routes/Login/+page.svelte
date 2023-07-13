<script>
  import { login, signUp } from "../../js/supabaseClient.mjs";
  let email = "";
  let password = "";
  let loading = false;
  let errorMessage = "";

  async function handleLogin() {
    try {
      loading = true;
      const { data, error } = await login({ email, password });
      if (error) {
        throw error;
      }
    } catch (err) {
      errorMessage = err;
    } finally {
      loading = false;
    }
  }

  async function handleSignup() {
    try {
      loading = true;
      const { data, error } = await signUp({ email, password });
      if (error) {
        throw error;
      }
    } catch (err) {
      errorMessage = err;
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Login</title>
  <meta name="description" content="About this app" />
</svelte:head>
<section class="formsec">
  <div class="row flex-center flex">
    <div class="col-6 form-widget" aria-live="polite">
      <form class="form-widget" on:submit|preventDefault={handleLogin}>
        <h3 class="description">Sign in below</h3>
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
</section>

<style lang="scss">
  .formsec {
    background-color: $background-color;
    height: 100svh;
  }
  form {
    color: $text-color;
    height: 520px;
    width: 400px;
    background-color: $accent-color;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    //border: 2px solid $accent-color;
    //box-shadow: 0 0 40px $secondary-color;
    padding: 50px 35px;
  }

  form h3 {
    color: $text-color;
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }

  label {
    color: $text-color;
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }
  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: $background-color;
    border: none;
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }

  ::placeholder {
    color: $background-color;
  }
  button {
    margin-top: 50px;
    width: 100%;
    background-color: $primary-color;
    color: $background-color;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
  }
  #email,
  #password:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px $background-color inset;
  }
</style>
