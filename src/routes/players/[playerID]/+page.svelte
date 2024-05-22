<script>
    export let data;
</script>

<section>
    <h3><strong>PlayerID</strong> {data.player.ID}</h3>
    <p><strong>Name:</strong> {data.player.FirstName} {data.player.LastName}</p>
    <p><strong>Nationality:</strong> {data.player.Nationality}</p>
    <p><strong>Sex:</strong> {data.player.Sex}</p>
    <p><strong>Birthday:</strong> {data.player.Born}</p>
    <p><strong>Professional:</strong> {data.player.FirstSeasonAsPro}</p>
    <p><strong>Ranking Titles:</strong> {data.player.NumRankingTitles} </p>
    <p><strong>Maximums:</strong> {data.player.NumMaximums} </p>
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
