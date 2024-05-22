<script>
    export let data;
</script>

<section>
    <h3><strong>TournamentID</strong> {data.tours[0].ID}</h3>
    <p><strong>Name:</strong> {data.tours[0].Name}</p>
    <p><strong>Startdate:</strong> {data.tours[0].StartDate}</p>
    <p><strong>Enddate:</strong> {data.tours[0].EndDate}</p>
    <p><strong>Season:</strong> {data.tours[0].Season}</p>
    <p><strong>Type:</strong> {data.tours[0].Type}</p>
    <p><strong>Venue:</strong> {data.tours[0].Venue}</p>
    <p><strong>City:</strong> {data.tours[0].City}</p>
    <p><strong>Country:</strong> {data.tours[0].Country}</p>
    <p><strong>Number of competitors:</strong> {data.tours[0].NumCompetitors}</p>
    <p><strong>Tour:</strong> {data.tours[0].Tour}</p>
</section>

<style lang="scss">
    section {
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-align: left;
        h3{
            margin-bottom: 1rem;
        }
    }
</style>