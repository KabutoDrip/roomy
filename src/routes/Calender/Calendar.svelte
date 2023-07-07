<script>
  import { onMount } from "svelte";
  //gets the month as both a number 1-12 and as a string
  let monthNum = new Date().getMonth() + 1;
  let monthString = new Date(0, monthNum - 1).toLocaleString("default", {
    month: "long",
  });
  let calendar = [];
  onMount(() => {
    generateCalendar();
  });
  //function rerenders the calendar based off the newly generated month values.
  function updateMonth(modifier) {
    monthNum += modifier;
    monthString = new Date(0, monthNum - 1).toLocaleString("default", {
      month: "long",
    });
    console.log(monthNum);
    console.log(monthString);
    generateCalendar();
  }

  function generateCalendar() {
    //generates the calendar by finding the first weekday of the month as well as the length of the month.
    calendar = [];

    const firstDay = new Date(2023, monthNum - 1, 1).getDay();
    const totalDays = new Date(2023, monthNum, 0).getDate();

    let currentDay = 1;
    let currentWeek = 1;

    while (currentDay <= totalDays) {
      let week = [];
      //if the month is empty begin calculations for how many filler days before the first day of the month.
      if (calendar.length === 0) {
        for (let i = 0; i < firstDay; i++) {
          week.push("");
        }
      }
      //adds each day of the month to the week array
      for (let i = week.length; i < 7 && currentDay <= totalDays; i++) {
        week.push(currentDay++);
      }
      //pushes each week array to the calendar as objects incrementally until a full month has been generated.
      calendar.push({ weekNumber: currentWeek++, days: week });
    }
  }
</script>

<section class="calmain">
  <div class="calendarHeader">
    <!--buttons modify the numerical and string month values-->
    <button on:click={() => updateMonth(-1)} class="left-arrow">&#8249;</button>
    <h1>{monthString}</h1>
    <button on:click={() => updateMonth(1)} class="right-arrow">&#8250;</button>
  </div>

  <table class="calendar">
    <thead>
      <tr>
        <th><span>Sun</span></th>
        <th><span>Mon</span></th>
        <th><span>Tue</span></th>
        <th><span>Wed</span></th>
        <th><span>Thu</span></th>
        <th><span>Fri</span></th>
        <th><span>Sat</span></th>
      </tr>
    </thead>
    <tbody>
      <!-- Generates the table body to be structured as a calendar-->
      {#each calendar as { weekNumber, days }}
        <tr key={weekNumber}>
          {#each days as day}
            <td><span>{day}</span></td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style lang="scss">
  * {
    background-color: $background-color;
  }
  .calendar {
    margin: auto;
    text-align: center;

    th,
    td {
      padding: 40px;
      font-size: 30px;
      position: relative;
      &:hover {
        height: auto;
        transition: 0.3s;
      }
      span {
        background-color: transparent;
        position: relative;
        z-index: 2;
      }
    }
    td {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #efb7b7;
        opacity: 0;
        z-index: 1;
        transition: opacity 0.3s;
      }
      &:hover::before {
        opacity: 1;
      }
    }
  }

  .calendarHeader {
    display: flex;
    margin: 10px 0 10px 0;
  }

  .left-arrow,
  .right-arrow {
    width: 30px;
    border: none;
    font-size: 30px;
  }

  h1 {
    margin: 0;
  }
  .calmain {
    flex: 0 0 60%;
  }
  @media screen and (max-width: 1024px) {
    .calmain {
      flex: 0 0 100%;
    }
    .calendar {
      width: 100%;
      table-layout: fixed;
      th,
      td {
        padding: 5vw;
        font-size: 4svw;
      }
    }
  }
</style>
