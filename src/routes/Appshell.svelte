<script>
	import { page } from '$app/stores';
	//import {userStore} from "../js/stores.mjs"
	import {getUserProfile} from "../js/supabaseClient.mjs"
	//const userId = userStore.userId.userId;

	async function init(){
		const profile = await getUserProfile(userId)
	}
</script>

<header>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/test' ? 'page' : undefined}>
				<a href="/Calender">Calender</a>
			</li>
			<li aria-current={$page.url.pathname === '/test2' ? 'page' : undefined}>
				<a href="/Login">Login</a>
			</li>
		</ul>
	</nav>
</header>

