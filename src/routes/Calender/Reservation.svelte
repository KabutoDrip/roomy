<script>
    import {postCalenderData} from '../../js/supabaseClient.mjs'
function sendResverationData() {
    let form = document.querySelector('.reservationForm')
    let title = form.elements['title'].value;
    let start_time = form.elements['start'].value;
    let end_time = form.elements['end'].value;
    let details = form.elements['details'].value;
    let data = {title, start_time, end_time, details};

    postCalenderData(data);
}
</script>
<h1>Reservation</h1>

<form class="reservationForm" on:submit|preventDefault={sendResverationData}>
    <label for="title">Choose a title:</label>
    <input type="text" id="title" name="title" required>
    <label for="start">Choose a start time:</label>
    <input type="time" id="start" name="start"required>
    <label for="end">Choose a end time:</label>
    <input type="time" id="end" name="end"required>
    <label for="details">Add any details:</label>
    <textarea name="details" id="details" cols="30" rows="10"></textarea>
    <button type="submit">Save</button>
</form>

