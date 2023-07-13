<script>
  import MediaQuery from "../globalComponents/MediaQuery.svelte";
  import Reservation from "./Reservation.svelte";
  import Calendar from "./Calendar.svelte";
</script>

<svelte:head>
  <title>Calender</title>
  <meta name="description" content="About this app" />
  <link rel="icon" href="../img/cal.ico" type="image/x-icon" />
</svelte:head>
<!--Svelte Media Queries to display components in different manners depending on device size-->
<div class="calendar-page">
  <MediaQuery query="(max-width: 1024px)" let:matches>
    {#if matches}
      <Calendar />
    {/if}
  </MediaQuery>
  <MediaQuery query="(min-width: 1025px)" let:matches>
    {#if matches}
      <Calendar />

      <Reservation />
    {/if}
  </MediaQuery>
</div>

<style lang="scss">
  .calendar-page {
    display: flex;
  }
</style>
