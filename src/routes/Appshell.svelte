<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/test' ? 'page' : undefined}>
				<a href="/test">Test</a>
			</li>
			<li aria-current={$page.url.pathname === '/test2' ? 'page' : undefined}>
				<a href="/Login">Login</a>
			</li>
		</ul>
	</nav>
</header>

