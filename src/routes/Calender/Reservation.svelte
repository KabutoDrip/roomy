<script>
</script>

<section class="resmain">
  <section class="reservationList">
    <li class="reservation-list">
      <ul>Sample Event</ul>
      <ul>Sample Event</ul>
      <ul>Sample Event</ul>
      <ul>Sample Event</ul>
      <ul>Sample Event</ul>
    </li>
  </section>
  <form class="reservationForm">
    <label hidden for="title">Add title:</label>
    <input type="text" id="title" name="title" placeholder="Add title:" />

    <label for="appt">Choose a start time:</label>
    <input type="time" id="appt" name="appt" required />
    <label for="appt">Choose a end time:</label>
    <input type="time" id="appt" name="appt" required />

    <label for="details">Add any details:</label>
    <textarea name="details" id="details" cols="30" rows="10" />
    <button type="submit">Save</button>
  </form>
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
    color: $background-color;
    border: none;
    border-radius: 3px;
  }
</style>
