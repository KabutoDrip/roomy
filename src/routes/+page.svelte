<script>
  import { getCalendarData } from "../js/supabaseClient.mjs";
  import { onMount } from "svelte";
  onMount(() => {
    onCall();
  });
  let events = [];
  async function onCall() {
    events = await getCalendarData();
    console.log(events);
  }
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="+page.js"></script>

  <title>Roomy Home</title>
</svelte:head>

<section>
  <a href="#header" id="back-to-top" class="top">
    <i class="fa fa-chevron-up" />
  </a>
  <section id="header" class="header">
    <div class="navigation">
      <a href="/">
        <span id="logo"><strong class="strong">W</strong>elcome</span>
      </a>
    </div>

    <div class="container">
      <img
        src="/src/routes/img/bird_2.png"
        alt="Icon"
        style="width:200px; height:200px;"
      />
      <h1>My Events</h1>
      {#each events as event}
        <li>
          <div class="card">
            <h1 class="card-title">{event.calendar_data.title}</h1>
            <h3 class="card-time">
              {event.calendar_data.start_time} - {event.calendar_data.end_time}
            </h3>
          </div>
        </li>
      {/each}
    </div>
  </section>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;

    .header {
      height: 100%;
      width: 100%;
      background: linear-gradient(50deg, #f57c73, #ffd0a5);

      #logo {
        font-size: 80px;
        letter-spacing: 10px;
        font-weight: 100;
        display: inline-block;
        padding: 0px;

        .strong {
          font-weight: 400;
        }
      }

      img {
        width: 100%;
      }
    }

    .card {
      color: $background-color;
      border-radius: 6px;
      padding: 10px;
      margin-bottom: 10px;
      background-color: $text-color;
      display: flex;

      .card-title {
        font-size: 25px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 5px;
      }

      .card-time {
        padding-left: 20px;
        font-size: 25px;
        margin: 0;
      }
    }
  }
</style>
