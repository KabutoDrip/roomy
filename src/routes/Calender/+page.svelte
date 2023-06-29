<script>
	import MediaQuery from '../globalComponents/MediaQuery.svelte'
	import Reservation from './Reservation.svelte'
</script>
<svelte:head>
	<title>Calender</title>
	<meta name="description" content="About this app" />
</svelte:head>
<!--Default select  current date-->
<!--User selects a calendar day to change the displayed reservation on the right of the screen in desktop-->
<!--when user selects a date in mobile the reservatino screen takes over the whole screen with a button to go back-->
<body>
	<MediaQuery query='(max-width: 1024px)' let:matches>
		{#if matches}
			<div class="calendar">
				<h1>Calender</h1>
			</div>
		{/if}
	</MediaQuery>
	<MediaQuery query='(min-width: 1025px)' let:matches>
		{#if matches}
			<div class="calendar">
				<h1>Calender</h1>
			</div>
			<Reservation />
		{/if}
	</MediaQuery>
</body>