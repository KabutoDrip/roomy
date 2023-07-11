<script>
  import { postCalendarData } from "../../js/supabaseClient.mjs";
  import { calendarInfo } from "../../js/stores.mjs";
  import { onDestroy } from "svelte";
  import { getCalendarData } from "../../js/supabaseClient.mjs";
  import { onMount } from "svelte";
  //formats the form data into the data variable and passes that into the function that populates the calendar table.
  let getData = []; //this is the list

  function sendResverationData() {
    let form = document.querySelector(".reservationForm");
    let title = form.elements["title"].value;
    let start_time = form.elements["start"].value;
    let end_time = form.elements["end"].value;
    let details = form.elements["details"].value;
    let month = showData.month;
    let day = showData.day;
    let data = { title, start_time, end_time, details, month, day };

    postCalendarData(data);
    onCall();
    calendarInfo.set({ show: false, month: 0, day: 0 });
  }
  let showData = {};
  onMount(() => {
    onCall();
  });

  const unsubscribe = calendarInfo.subscribe((value) => (showData = value));
  let events = [];
  onDestroy(unsubscribe);

  async function onCall() {
    events = await getCalendarData();
    console.log(events);

    // events = getData.map((event) => {
    //   return { id: event.id, calendar_data: event.data };
    // });
  }
</script>

<section class="resmain">
  <section class="reservationList">
    <!--List of events stored for the currently viewed calendar-->
    <ul class="reservation-list">
      {#each events as event}
        <li>{event.calendar_data.title}</li>
      {/each}
    </ul>
  </section>
  {#if showData.show}
    <form
      class="reservationForm"
      on:submit|preventDefault={sendResverationData}
    >
      <label for="title">Choose a title:</label>
      <input type="text" id="title" name="title" required />
      <label for="start">Choose a start time:</label>
      <input type="time" id="start" name="start" required />
      <label for="end">Choose a end time:</label>
      <input type="time" id="end" name="end" required />
      <label for="details">Add any details:</label>
      <textarea name="details" id="details" cols="30" rows="10" />
      <button type="submit">Save</button>
    </form>
  {/if}
</section>

<style lang="scss">
  .resmain {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #title {
    padding: 10px;
    font-size: 20px;
    width: 100%;
  }
  .reservationList {
    flex: 0 0 40%;
  }
  .reservationForm {
    width: 80%;
    text-align: center;
    flex: 1 0 50%;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    margin-top: 12px;
  }

  button {
    background-color: $background-color;
    border: none;
    border-radius: 3px;
  }
</style>
