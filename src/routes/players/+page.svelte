<script>
    export let data;
    console.log(data.players);
</script>

<h2>List of players</h2>
<ol>
    {#each data.players as player}
        <li>
            {#if player.Died}
                Död: {player.FirstName} {player.LastName}
            {:else}
                <a href="/players/{player.ID}">{player.FirstName} {player.LastName}</a>
            {/if}
        </li>
    {/each}
</ol>

<style lang="scss">
    h2{
        margin-top: 1rem;
    }
    ol {
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: left;
        li {
            margin-left: 5rem;
            margin-right: 32rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            text-align: left;
        }
    }
</style>
