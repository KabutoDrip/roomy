<script>
	import { page } from '$app/stores';
	//import { userStore } from "../js/stores.mjs"
	//import {getUserProfile} from "../js/supabaseClient.mjs"
	//let profile = {};
	//const userId = $userStore.user.id;

	//async function init(){
	//	profile = await getUserProfile(userId)
	//	console.log(profile);
	//}
	//init()
	let currentDate = new Date();
	function getDate(c) {
        return c.getDate();
    }
</script>

<header>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/"><img src="/src/routes/img/bird_2.png" alt="HomeIcon" style="width:50px; height:50px;"></a>
			</li>
			<li aria-current={$page.url.pathname === '/test' ? 'page' : undefined}>
				<a href="/Calender"><img src="/src/routes/img/{getDate(currentDate)}.svg" alt="Calender" style="width:50px; height:50px;"></a>
			</li>
			<li aria-current={$page.url.pathname === '/test2' ? 'page' : undefined}>
				<a href="/Login"><img src="/src/routes/img/login.svg" alt="Login" style="width:50px; height:50px;"></a>
			</li>
		</ul>
	</nav>
</header>

