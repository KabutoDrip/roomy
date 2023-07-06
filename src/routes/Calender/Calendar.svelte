<script>
  import { onMount } from "svelte";

  let monthNum = new Date().getMonth() + 1;
  let monthString = new Date(0, monthNum - 1).toLocaleString("default", {
    month: "long",
  });
  let calendar = [];
  onMount(() => {
    generateCalendar();
  });

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
    calendar = [];

    const firstDay = new Date(2023, monthNum - 1, 1).getDay();
    const totalDays = new Date(2023, monthNum, 0).getDate();

    let currentDay = 1;
    let currentWeek = 1;

    while (currentDay <= totalDays) {
      let week = [];

      if (calendar.length === 0) {
        for (let i = 0; i < firstDay; i++) {
          week.push("");
        }
      }

      for (let i = week.length; i < 7 && currentDay <= totalDays; i++) {
        week.push(currentDay++);
      }

      calendar.push({ weekNumber: currentWeek++, days: week });
    }
  }
</script>

<main>
  <div class="calendarHeader">
    <button on:click={() => updateMonth(-1)} class="left-arrow">&#8249;</button>
    <h1>{monthString}</h1>
    <button on:click={() => updateMonth(1)} class="right-arrow">&#8250;</button>
  </div>

  <table class="calendar">
    <thead>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
    </thead>
    <tbody>
      {#each calendar as { weekNumber, days }}
        <tr key={weekNumber}>
          {#each days as day}
            <td><span>{day}</span></td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</main>
<style lang="scss">
  * {
    background-color: $background-color;
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
  }
</style>
